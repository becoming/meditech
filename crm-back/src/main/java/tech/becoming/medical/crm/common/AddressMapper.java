package tech.becoming.medical.crm.common;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.patient.dto.PatientDTO;
import tech.becoming.medical.crm.patient.entity.PatientEntity;

import java.util.List;

@Mapper
public interface AddressMapper {

    AddressDTO toDto(AddressEntity v);

    default List<AddressDTO> toDTO(Page<AddressEntity> v) {
        return v.map(this::toDto)
                .getContent();
    }

    AddressEntity toEntity(AddressDTO v);
}
