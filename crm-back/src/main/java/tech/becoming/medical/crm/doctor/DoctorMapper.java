package tech.becoming.medical.crm.doctor;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.doctor.dto.DoctorView;
import tech.becoming.medical.crm.doctor.dto.NewDoctor;
import tech.becoming.medical.crm.doctor.entity.Doctor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper(componentModel = "spring")
public interface DoctorMapper {

    default List<DoctorView> toDto(Page<Doctor> v) {
        return v.map(this::toDto)
                .getContent();
    }

    DoctorView toDto(Doctor v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<DoctorView> toDto(Iterable<Doctor> v) {
        var result = new HashSet<DoctorView>();
        v.forEach(game -> result.add(toDto(game)));

        return result;
    }

    Doctor toEntity(NewDoctor v);
}
