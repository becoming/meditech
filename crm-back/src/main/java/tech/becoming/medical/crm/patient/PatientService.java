package tech.becoming.medical.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.BadRequestException;
import tech.becoming.common.exceptions.NotFoundException;
import tech.becoming.medical.crm.common.IdentityEntity;
import tech.becoming.medical.crm.common.IdentityRepository;
import tech.becoming.medical.crm.patient.dto.NewIdentityRequest;
import tech.becoming.medical.crm.patient.dto.PatientIdentityView;
import tech.becoming.medical.crm.patient.dto.PatientView;
import tech.becoming.medical.crm.patient.entity.PatientEntity;

import java.time.Instant;
import java.util.List;
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

    public Try<PatientView> create(NewIdentityRequest p) {
        return Try.of(() -> p)
                .map(helper::validate)
                .map(mapper::toEntity)
                .map(PatientEntity::setupNew)
                .map(patientRepository::save) // FIXME start, solve this double save
                .map(this::saveIdentity)
                .map(patientRepository::save) // FIXME end
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not create a new patient, e: {}", e.getMessage()));
    }

    public Try<PatientIdentityView> getIdentity(UUID patientId, UUID identityId) {
        return Try.of(() -> patientId)
                .map(patientRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(patient -> patient.getIdentity().getId().equals(identityId))
                .map(BadRequestException::throwIfFalse)
                .map($ -> identityRepository.findById(identityId))
                .map(NotFoundException::throwIfEmpty)
                .map(mapper::toDto);
    }

    public Try<PatientIdentityView> updateIdentity(UUID patientId, UUID identityId, PatientIdentityView p) {
        return Try.of(() -> patientId)
                .map(patientRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(it -> it.hasIdentityId(identityId))
                .map(BadRequestException::throwIfFalse)
                .map($ -> identityRepository.findById(identityId))
                .map(NotFoundException::throwIfEmpty)
                .map(it -> it.update(p))
                .map(identityRepository::save)
                .map(mapper::toDto);
    }

    private PatientEntity saveIdentity(PatientEntity patient) {
        var i = identityRepository.save(patient.getIdentity());
        patient.setIdentity(i);
        return patient;
    }

}
