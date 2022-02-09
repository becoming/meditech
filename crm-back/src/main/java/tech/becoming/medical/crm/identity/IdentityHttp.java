package tech.becoming.medical.crm.identity;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.patient.PatientService;

import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/identities")
public class IdentityHttp {

    private final IdentityService service;

    @PutMapping("{identityId}")
    public Try<IdentityDTO> update(@PathVariable UUID identityId,
                                   @RequestBody IdentityDTO p) {
        return service.updateIdentity(identityId, p);
    }

    @GetMapping("{identityId}")
    public Try<IdentityDTO> findById(@PathVariable UUID identityId) {
        return service.findById(identityId);
    }

}
