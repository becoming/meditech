package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PatientDTO extends BasicDto {

    private PatientIdentityDTO identity;
    private Set<PatientAddressDTO> addresses;

}
