package tech.becoming.medical.crm.doctor;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.medical.crm.doctor.dto.DoctorView;
import tech.becoming.medical.crm.doctor.dto.NewDoctorRequest;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository repo;
    private final DoctorMapper mapper;

    public Try<List<DoctorView>> findInRange(PageRequest p) {
        return Try.of(() -> p)
                .map(repo::findAll)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<DoctorView> create(NewDoctorRequest p) {
        return Try.of(() -> p)
//                .map(helper::validate)
                .map(mapper::toEntity)
//                .map(this::setupNew)
                .map(repo::save)
                .map(mapper::toDto)
                .onFailure(e -> log.error("Could not create a new doctor, e: {}", e.getMessage()));
    }
}
