package tech.becoming.medical.crm.api;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.patient.PatientService;
import tech.becoming.medical.crm.patient.dto.NewPatient;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("patients")
public class PatientHttp {

    private final PatientService service;

    @GetMapping
    public Try<List<PatientView>> findInRange(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "50") int size) {
        return service.findInRange(PageRequest.of(page, size));
    }

    @PostMapping
    public Try<PatientView> create(@RequestBody NewPatient p) {
        return service.create(p);
    }

}
