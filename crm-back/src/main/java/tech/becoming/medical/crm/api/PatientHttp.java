package tech.becoming.medical.crm.api;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.patient.PatientService;
import tech.becoming.medical.crm.patient.dto.NewIdentity;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/patients")
public class PatientHttp {

    private final PatientService service;

    @GetMapping
    public Try<List<PatientView>> findInRange(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "50") int size) {
        return service.findInRange(PageRequest.of(page, size));
    }

    @GetMapping("{id}")
    public Try<PatientView> findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PostMapping
    public Try<PatientView> create(@RequestBody NewIdentity p) {
        return service.create(p);
    }

}
