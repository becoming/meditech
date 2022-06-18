package tech.becoming.meditech.crm.patient;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.meditech.crm.identity.IdentityEntity;
import tech.becoming.meditech.crm.patient.dto.NewIdentityDTO;
import tech.becoming.meditech.crm.patient.dto.PatientDTO;
import tech.becoming.meditech.crm.identity.IdentityDTO;
import tech.becoming.meditech.crm.patient.entity.PatientEntity;

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

    IdentityEntity toEntity(IdentityDTO p);

    IdentityDTO toDto(IdentityEntity v);
}
