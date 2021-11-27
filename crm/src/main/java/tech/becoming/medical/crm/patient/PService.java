package tech.becoming.medical.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class PService {

    private final PHelper helper;
    private final PRepository repository;
    private final PMapper mapper;

    public Try<List<PatientView>> findInRange(PageRequest pageRequest) {
        return Try.of(() -> pageRequest)
                .map(helper::validatePage)
                .map(repository::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

}
