package tech.becoming.medical.crm.api;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.becoming.medical.crm.procedure.MedicalProcedure;
import tech.becoming.medical.crm.procedure.ProcedureService;
import tech.becoming.medical.crm.procedure.ProcedureView;

@RestController
@RequestMapping("procedures")
@RequiredArgsConstructor
public class ProcedureHttp {

    private final ProcedureService service;

    @PostMapping
    public Try<MedicalProcedure> create(@RequestBody ProcedureView p) {
        return service.create(p);
    }

}
