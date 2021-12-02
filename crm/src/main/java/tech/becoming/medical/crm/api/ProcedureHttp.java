package tech.becoming.medical.crm.api;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.becoming.medical.crm.medicalservice.MedicalService;

@RestController
@RequestMapping("procedures")
public class ProcedureHttp {

    public MedicalService create(@RequestBody ProcedureView p) {

    }

}
