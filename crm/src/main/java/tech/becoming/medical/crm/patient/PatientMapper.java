package tech.becoming.medical.crm.patient;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.patient.dto.NewPatient;
import tech.becoming.medical.crm.patient.dto.PatientView;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper(componentModel = "spring")
public interface PatientMapper {

    default List<PatientView> toDto(Page<Patient> v) {
        return v.map(this::toDto)
                .getContent();
    }

    PatientView toDto(Patient v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<PatientView> toDto(Iterable<Patient> v) {
        var result = new HashSet<PatientView>();
        v.forEach(game -> result.add(toDto(game)));

        return result;
    }

    @Mapping(source = "firstName", target = "identity.firstName")
    @Mapping(source = "lastName", target = "identity.lastName")
    @Mapping(source = "medicalId", target = "identity.medicalId")
    @Mapping(source = "nationalId", target = "identity.nationalId")
    @Mapping(source = "birthDate", target = "identity.birthDate")
    Patient toEntity(NewPatient v);
}
