package tech.becoming.medical.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.procedure.dto.NewProcedureDTO;
import tech.becoming.medical.crm.procedure.dto.ProcedureDTO;
import tech.becoming.medical.crm.procedure.entity.MedicalProcedureEntity;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProcedureService {

    private final ProcedureRepository repo;
    private final ProcedureMapper mapper;

    public Try<List<ProcedureDTO>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(repo::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<ProcedureDTO> create(NewProcedureDTO dto) {
        return Try.of(() -> dto)
                .map(mapper::toEntity)
                .map(MedicalProcedureEntity::setupNew)
                .map(repo::save)
                .map(mapper::toDto);
    }
}
