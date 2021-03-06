package tech.becoming.meditech.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.BadRequestException;
import tech.becoming.common.exceptions.NotFoundException;
import tech.becoming.meditech.crm.procedure.dto.NewProcedureDTO;
import tech.becoming.meditech.crm.procedure.dto.ProcedureDTO;
import tech.becoming.meditech.crm.procedure.entity.MedicalProcedureEntity;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProcedureService {

    private final ProcedureRepository repo;
    private final ProcedureMapper mapper;

    public Try<ProcedureDTO> find(UUID id) {
        return Try.of(() -> id)
                .map(repo::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(mapper::toDto)
                .onFailure(e -> log.debug("Could not find by id, id: {}", id));
    }

    public Try<List<ProcedureDTO>> find(PageRequest p) {
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

    public Try<ProcedureDTO> update(UUID id, ProcedureDTO dto) {
        return Try.of(() -> dto)
                .andThen(() -> BadRequestException.throwIfFalse(dto.getId().equals(id.toString())))
                .map(d -> repo.findById(id))
                .map(NotFoundException::throwIfEmpty)
                .map(entity -> entity.update(dto))
                .map(repo::save)
                .map(mapper::toDto);
    }
}
