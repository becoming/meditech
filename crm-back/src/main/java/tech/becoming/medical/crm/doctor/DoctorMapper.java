package tech.becoming.medical.crm.doctor;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.doctor.dto.DoctorDTO;
import tech.becoming.medical.crm.doctor.dto.NewDoctorRequest;
import tech.becoming.medical.crm.doctor.entity.DoctorEntity;

import java.util.*;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper(componentModel = "spring")
public interface DoctorMapper {

    default List<DoctorDTO> toDto(Page<DoctorEntity> v) {
        return v.map(this::toDto)
                .getContent();
    }

    DoctorDTO toDto(DoctorEntity v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<DoctorDTO> toDto(Iterable<DoctorEntity> v) {
        var result = new HashSet<DoctorDTO>();
        v.forEach(game -> result.add(toDto(game)));

        return result;
    }

    DoctorEntity toEntity(NewDoctorRequest v);
}
