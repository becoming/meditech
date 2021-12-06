package tech.becoming.medical.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProcedureService {

    private final ProcedureRepository repo;
    private final ProcedureMapper mapper;

    public Try<MedicalProcedure> create(ProcedureView p) {
        return Try.of(() -> p)
                .map(mapper::toEntity)
                .map(repo::save);
    }
}
