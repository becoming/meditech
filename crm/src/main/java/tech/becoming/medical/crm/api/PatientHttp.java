package tech.becoming.medical.crm.api;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tech.becoming.medical.crm.patient.PService;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("patients")
public class PatientHttp {

    private final PService service;

    @GetMapping
    public Try<List<PatientView>> getRobots(@RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "50") int size) {
        return service
                .findInRange(PageRequest.of(page, size))
                .onFailure(e -> log.debug("Error occurred while finding in range, e: {}", e.getMessage()));
    }

}
