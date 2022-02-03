package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.address.AddressDTO;

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
