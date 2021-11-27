package tech.becoming.medical.crm.patient.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class PatientDetailsView extends BasicDto {

    private String firstName;
    private String lastName;

    private String birthDate;
    private String deathDate;

    private Set<PatientAddressView> addresses;

}
