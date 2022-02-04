package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.address.AddressDTO;
import tech.becoming.medical.crm.common.BasicDTO;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PatientDTO extends BasicDTO {

    private PatientIdentityDTO identity;
    private Set<AddressDTO> addresses;

}
