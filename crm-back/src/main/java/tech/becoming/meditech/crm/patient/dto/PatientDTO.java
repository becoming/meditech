package tech.becoming.meditech.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.address.AddressDTO;
import tech.becoming.meditech.crm.common.BasicDTO;
import tech.becoming.meditech.crm.identity.IdentityDTO;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PatientDTO extends BasicDTO {

    private IdentityDTO identity;
    private Set<AddressDTO> addresses;

}
