package tech.becoming.meditech.crm.visit;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.becoming.meditech.crm.visit.dto.NewVisit;
import tech.becoming.meditech.crm.visit.dto.VisitDTO;

@RestController
@RequestMapping("api/v1/visit")
@RequiredArgsConstructor
public class VisitHttp {

    private VisitService visitService;

    @PostMapping
    public Try<VisitDTO> create(@RequestBody NewVisit visit) {
        return visitService.create(visit);
    }

}
