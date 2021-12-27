package tech.becoming.medical.crm.patient;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.patient.dto.NewIdentityDTO;
import tech.becoming.medical.crm.patient.dto.PatientDTO;
import tech.becoming.medical.crm.patient.dto.PatientIdentityDTO;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/patients")
public class PatientHttp {

    private final PatientService service;

    @GetMapping
    public Try<List<PatientDTO>> findInRange(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "50") int size) {
        return service.findInRange(PageRequest.of(page, size));
    }

    @GetMapping("{id}")
    public Try<PatientDTO> findById(@PathVariable UUID id) {
        return service.findById(id);
    }

    @PostMapping
    public Try<PatientDTO> create(@RequestBody NewIdentityDTO p) {
        return service.create(p);
    }

    @PutMapping("{patientId}/identity/{identityId}")
    public Try<PatientIdentityDTO> update(@PathVariable UUID patientId,
                                          @PathVariable UUID identityId,
                                          @RequestBody PatientIdentityDTO p) {
        return service.updateIdentity(patientId, identityId, p);
    }

    @GetMapping("{patientId}/identity/{identityId}")
    public Try<PatientIdentityDTO> update(@PathVariable UUID patientId,
                                          @PathVariable UUID identityId) {
        return service.getIdentity(patientId, identityId);
    }

}
