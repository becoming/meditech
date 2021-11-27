package tech.becoming.medical.crm.patient;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.patient.dto.NewPatientDetails;
import tech.becoming.medical.crm.patient.dto.PatientView;
import tech.becoming.medical.crm.patient.entity.Patient;
import tech.becoming.medical.crm.patient.entity.PatientDetails;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
@Mapper(componentModel = "spring")
public interface PatientMapper {

    default List<PatientView> toDto(Page<Patient> page) {
        return page
                .map(this::toDto)
                .getContent();
    }

//    https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
    @Mapping(source = "publisher.id", target = "publisherId")
    @Mapping(source = "publisher.name", target = "publisherName")
    PatientView toDto(Patient gg);

    default Set<PatientView> toDto(Iterable<Patient> games) {
        var result = new HashSet<PatientView>();
        games.forEach(game -> result.add(toDto(game)));

        return result;
    }

//    https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "publisher", ignore = true)
    PatientDetails toEntity(NewPatientDetails dto);
}
