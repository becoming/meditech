package tech.becoming.meditech.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.BadRequestException;
import tech.becoming.common.exceptions.NotFoundException;
import tech.becoming.meditech.crm.address.AddressDTO;
import tech.becoming.meditech.crm.address.AddressEntity;
import tech.becoming.meditech.crm.address.AddressMapper;
import tech.becoming.meditech.crm.address.AddressRepository;
import tech.becoming.meditech.crm.identity.IdentityDTO;
import tech.becoming.meditech.crm.identity.IdentityRepository;
import tech.becoming.meditech.crm.patient.dto.NewIdentityDTO;
import tech.becoming.meditech.crm.patient.dto.PatientDTO;
import tech.becoming.meditech.crm.patient.entity.PatientEntity;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientHelper patientHelper;
    private final PatientRepository patientRepository;
    private final IdentityRepository identityRepository;
    private final AddressRepository addressRepository;
    private final AddressMapper addressMapper;
    private final PatientMapper patientMapper;

    public Try<PatientDTO> findById(UUID id) {
        return Try.of(() -> id)
                .map(patientRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(patientMapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<List<PatientDTO>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(patientHelper::validate)
                .map(patientRepository::findAll)
                .map(patientMapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<PatientDTO> create(NewIdentityDTO p) {
        return Try.of(() -> p)
                .map(patientHelper::validate)
                .map(patientMapper::toEntity)
                .map(PatientEntity::setupNew)
                .map(patientRepository::save) // FIXME start, solve this double save
                .map(this::saveIdentity)
                .map(patientRepository::save) // FIXME end
                .map(patientMapper::toDto)
                .onFailure(e -> log.error("Could not create a new patient, e: {}", e.getMessage()));
    }

    public Try<AddressDTO> createAddress(UUID patientId, AddressDTO addressDTO) {
        return Try.of(() -> addressDTO)
                .map(addressMapper::toEntity)
                .map(AddressEntity::setupNew)
                .map(addressRepository::save)
                .map(addressEntity -> addAddressToPatient(patientId, addressEntity))
                .map(addressRepository::save)
                .map(addressMapper::toDto)
                .onFailure(e -> log.error("Could not create patient address, e: {}", e.getMessage()));

    }

    public Try<IdentityDTO> getIdentity(UUID patientId, UUID identityId) {
        return Try.of(() -> patientId)
                .map(patientRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(patient -> patient.getIdentity().getId().equals(identityId))
                .map(BadRequestException::throwIfFalse)
                .map($ -> identityRepository.findById(identityId))
                .map(NotFoundException::throwIfEmpty)
                .map(patientMapper::toDto);
    }

    private AddressEntity addAddressToPatient(UUID patientId, AddressEntity addressEntity) {
        var patient = patientRepository.findById(patientId).orElseThrow(NotFoundException::new);
        patient.getAddresses().add(addressEntity);
        patientRepository.save(patient);

        return addressEntity;
    }

    private PatientEntity saveIdentity(PatientEntity patient) {
        var i = identityRepository.save(patient.getIdentity());
        patient.setIdentity(i);

        return patient;
    }


}
