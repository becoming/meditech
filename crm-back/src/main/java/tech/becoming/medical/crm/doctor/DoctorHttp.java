package tech.becoming.medical.crm.doctor;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import tech.becoming.medical.crm.doctor.DoctorService;
import tech.becoming.medical.crm.doctor.dto.DoctorView;
import tech.becoming.medical.crm.doctor.dto.NewDoctorRequest;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/doctors")
public class DoctorHttp {

    private final DoctorService service;

    @GetMapping
    public Try<List<DoctorView>> findInRange(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "50") int size) {
        return service.findInRange(PageRequest.of(page, size));
    }

    @PostMapping
    public Try<DoctorView> create(@RequestBody NewDoctorRequest p) {
        return service.create(p);
    }

}
