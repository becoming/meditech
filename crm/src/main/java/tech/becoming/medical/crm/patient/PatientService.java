package tech.becoming.medical.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.patient.dto.NewPatient;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientHelper helper;
    private final PatientRepository repository;
    private final PatientMapper mapper;

    public Try<List<PatientView>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(helper::validate)
                .map(repository::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<PatientView> create(NewPatient p) {
        return Try.of(() -> p)
                .map(helper::validate)
                .map(mapper::toEntity)
                .map(this::setupNew)
                .map(repository::save)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not create a new patient, e: {}", e.getMessage()));
    }

    private Patient setupNew(Patient p) {
        var now = Instant.now();

        p.setCreated(now);
        p.setUpdated(now);
        p.getIdentity().setCreated(now);
        p.getIdentity().setUpdated(now);

        p.setBusinessId(UUID.randomUUID());


        return p;
    }
}
