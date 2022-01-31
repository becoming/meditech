package tech.becoming.medical.crm.address;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.doctor.dto.DoctorAddressDTO;
import tech.becoming.medical.crm.patient.dto.PatientAddressDTO;

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
    AddressEntity toAEntity(PatientAddressDTO v);
    AddressEntity toDEntity(DoctorAddressDTO v);
}
