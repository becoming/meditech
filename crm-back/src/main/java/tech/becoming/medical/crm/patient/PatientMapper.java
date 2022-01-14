package tech.becoming.medical.crm.patient;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.common.IdentityEntity;
import tech.becoming.medical.crm.patient.dto.NewIdentityDTO;
import tech.becoming.medical.crm.patient.dto.PatientIdentityDTO;
import tech.becoming.medical.crm.patient.dto.PatientDTO;
import tech.becoming.medical.crm.patient.entity.PatientEntity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper
public interface PatientMapper {

    default List<PatientDTO> toDto(Page<PatientEntity> v) {
        return v.map(this::toDto)
                .getContent();
    }

    PatientDTO toDto(PatientEntity v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<PatientDTO> toDto(Iterable<PatientEntity> v) {
        var result = new HashSet<PatientDTO>();
        v.forEach(game -> result.add(toDto(game)));

        return result;
    }

    IdentityEntity toEntity(NewIdentityDTO v);

    IdentityEntity toEntity(PatientIdentityDTO p);

    PatientIdentityDTO toDto(IdentityEntity v);
}
