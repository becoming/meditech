package tech.becoming.meditech.crm.visit;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.becoming.meditech.crm.visit.dto.NewVisit;
import tech.becoming.meditech.crm.visit.dto.VisitDTO;

@Service
@RequiredArgsConstructor
public class VisitService {


    public Try<VisitDTO> create(NewVisit visit) {
        return null;
    }
}
