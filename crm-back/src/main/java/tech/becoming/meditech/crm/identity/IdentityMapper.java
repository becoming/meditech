package tech.becoming.meditech.crm.identity;

import org.mapstruct.Mapper;
import tech.becoming.meditech.crm.patient.dto.NewIdentityDTO;

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
