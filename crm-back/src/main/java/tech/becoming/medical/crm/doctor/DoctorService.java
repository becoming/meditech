package tech.becoming.medical.crm.doctor;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.address.AddressDTO;
import tech.becoming.medical.crm.address.AddressEntity;
import tech.becoming.medical.crm.address.AddressMapper;
import tech.becoming.medical.crm.address.AddressRepository;
import tech.becoming.medical.crm.doctor.dto.DoctorAddressDTO;
import tech.becoming.medical.crm.doctor.dto.DoctorView;
import tech.becoming.medical.crm.doctor.dto.NewDoctorRequest;
import tech.becoming.medical.crm.doctor.entity.DoctorEntity;

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
    private final DoctorMapper mapper;

    public Try<List<DoctorView>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(repo::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<DoctorView> create(NewDoctorRequest p) {
        return Try.of(() -> p)
//                .map(helper::validate)
                .map(mapper::toEntity)
//                .map(this::setupNew)
                .map(repo::save)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not create a new doctor, e: {}", e.getMessage()));
    }

    public Try<AddressDTO> createAddress(UUID doctorId, DoctorAddressDTO doctorAddressDTO) {
        return Try.of(() -> doctorAddressDTO)
                .map(addressMapper::toDEntity)
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
