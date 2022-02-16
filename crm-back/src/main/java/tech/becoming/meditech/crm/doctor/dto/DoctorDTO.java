package tech.becoming.meditech.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.address.AddressDTO;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class DoctorDTO {

    private String id;

    private MedicalLicenceDTO licence;

    private IdentityDTO identity;

    private Set<AddressDTO> addresses;
}
