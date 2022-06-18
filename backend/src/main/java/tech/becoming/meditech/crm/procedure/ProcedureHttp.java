package tech.becoming.meditech.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.meditech.crm.procedure.dto.NewProcedureDTO;
import tech.becoming.meditech.crm.procedure.dto.ProcedureDTO;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/procedures")
@RequiredArgsConstructor
@CrossOrigin("${app.http.security.cors}")
public class ProcedureHttp {

    private final ProcedureService service;

    @GetMapping
    public Try<List<ProcedureDTO>> findInRange(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "50") int size) {
        return service.find(PageRequest.of(page, size));
    }

    @GetMapping("{id}")
    public Try<ProcedureDTO> find(@PathVariable UUID id) {
        return service.find(id);
    }

    @PostMapping
    public Try<ProcedureDTO> create(@RequestBody NewProcedureDTO dto) {
        return service.create(dto);
    }

    @PutMapping("{id}")
    public Try<ProcedureDTO> update(@PathVariable UUID id, @RequestBody ProcedureDTO dto) {
        return service.update(id, dto);
    }

}
