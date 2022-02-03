package tech.becoming.medical.crm.address;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper
public interface AddressMapper {

    AddressDTO toDto(AddressEntity v);

    default List<AddressDTO> toDTO(Page<AddressEntity> v) {
        return v.map(this::toDto)
                .getContent();
    }

    AddressEntity toNewEntity(NewAddressDTO v);

    AddressEntity toEntity(AddressDTO v);
}
