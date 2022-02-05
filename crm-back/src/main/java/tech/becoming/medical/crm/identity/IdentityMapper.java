package tech.becoming.medical.crm.identity;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.patient.dto.NewIdentityDTO;
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
public interface IdentityMapper {

    IdentityEntity toEntity(NewIdentityDTO v);

    IdentityEntity toEntity(IdentityDTO p);

    IdentityDTO toDto(IdentityEntity v);
}
