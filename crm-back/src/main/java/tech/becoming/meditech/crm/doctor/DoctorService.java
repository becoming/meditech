package tech.becoming.meditech.crm.doctor;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.NotFoundException;
import tech.becoming.meditech.crm.address.AddressDTO;
import tech.becoming.meditech.crm.address.AddressEntity;
import tech.becoming.meditech.crm.address.AddressMapper;
import tech.becoming.meditech.crm.address.AddressRepository;
import tech.becoming.meditech.crm.doctor.dto.DoctorDTO;
import tech.becoming.meditech.crm.doctor.entity.DoctorEntity;
import tech.becoming.meditech.crm.identity.IdentityMapper;
import tech.becoming.meditech.crm.identity.IdentityRepository;
import tech.becoming.meditech.crm.patient.dto.NewIdentityDTO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository repo;
    private final AddressRepository addressRepository;
    private final AddressMapper addressMapper;
    private final DoctorMapper doctorMapper;
    private final IdentityMapper identityMapper;
    private final IdentityRepository identityRepository;

    public Try<List<DoctorDTO>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(repo::findAll)
                .map(doctorMapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<DoctorDTO> findById(UUID id) {
        return Try.of(() -> id)
                .map(repo::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(doctorMapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<DoctorDTO> create(NewIdentityDTO p) {
        return Try.of(() -> p)
                .map(identityMapper::toEntity)
                .map(DoctorEntity::setupNew)
                .map(repo::save) // FIXME start, solve this double save
                .map(this::saveIdentity)
                .map(repo::save) // FIXME end
                .map(doctorMapper::toDto)
                .onFailure(e -> log.error("Could not create a new patient, e: {}", e.getMessage()));
    }

    private DoctorEntity saveIdentity(DoctorEntity entity) {
        var i = identityRepository.save(entity.getIdentity());
        entity.setIdentity(i);

        return entity;
    }

    public Try<AddressDTO> createAddress(UUID doctorId, AddressDTO addressDTO) {
        return Try.of(() -> addressDTO)
                .map(addressMapper::toEntity)
                .map(addressRepository::save)
                .map(addressEntity -> addAddressToDoctor(addressEntity, doctorId))
                .map(addressRepository::save)
                .map(addressMapper::toDto)
                .onFailure(e -> log.error("Could not create doctor address, e: {}", e.getMessage()));
    }

    private AddressEntity addAddressToDoctor(AddressEntity addressEntity, UUID doctorId) {
        Optional<DoctorEntity> doctor = repo.findById(doctorId);
        doctor.get().getAddresses().add(addressEntity);
        repo.save(doctor.get());
        return addressEntity;
    }
}
