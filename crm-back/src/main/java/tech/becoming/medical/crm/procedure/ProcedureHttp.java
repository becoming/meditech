package tech.becoming.medical.crm.procedure;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.procedure.dto.NewProcedureDTO;
import tech.becoming.medical.crm.procedure.dto.ProcedureDTO;

import java.util.List;

@RestController
@RequestMapping("api/v1/procedures")
@RequiredArgsConstructor
@CrossOrigin("${app.http.security.cors}")
public class ProcedureHttp {

    private final ProcedureService service;

    @GetMapping
    public Try<List<ProcedureDTO>> findInRange(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "50") int size) {
        return service.findInRange(PageRequest.of(page, size));
    }

    @PostMapping
    public Try<ProcedureDTO> create(@RequestBody NewProcedureDTO dto) {
        return service.create(dto);
    }

}
