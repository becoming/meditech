package tech.becoming.medical.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.procedure.dto.ProcedureView;
import tech.becoming.medical.crm.procedure.entity.MedicalProcedureEntity;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProcedureService {

    private final ProcedureRepository repo;
    private final ProcedureMapper mapper;

    public Try<List<ProcedureView>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(repo::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<MedicalProcedureEntity> create(ProcedureView p) {
        return Try.of(() -> p)
                .map(mapper::toEntity)
                .map(repo::save);
    }
}
