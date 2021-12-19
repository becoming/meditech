package tech.becoming.medical.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.NotFoundException;
import tech.becoming.medical.crm.info.Identity;
import tech.becoming.medical.crm.info.IdentityRepository;
import tech.becoming.medical.crm.patient.dto.NewIdentity;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientHelper helper;
    private final PatientRepository patientRepository;
    private final IdentityRepository identityRepository;
    private final PatientMapper mapper;

    public Try<PatientView> findById(UUID id) {
        return Try.of(() -> id)
                .map(patientRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<List<PatientView>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(helper::validate)
                .map(patientRepository::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<PatientView> create(NewIdentity p) {
        return Try.of(() -> p)
                .map(helper::validate)
                .map(mapper::toEntity)
                .map(this::setupNew)
                .map(patientRepository::save)
                .map(this::saveIdentity)
                .map(patientRepository::save)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not create a new patient, e: {}", e.getMessage()));
    }

    private Patient saveIdentity(Patient patient) {
        var i = identityRepository.save(patient.getIdentity());
        patient.setIdentity(i);
        return patient;
    }

    private Patient setupNew(Identity identity) {
        var now = Instant.now();

        identity.setCreated(now);
        identity.setUpdated(now);

        var p = new Patient();
        p.setBusinessId(UUID.randomUUID());
        p.setIdentity(identity);
        p.setCreated(now);
        p.setUpdated(now);

        return p;
    }
}
