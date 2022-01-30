package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDto;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
public class PatientIdentityDTO extends BasicDto {

    private String firstName;
    private String lastName;

    private String medicalId;
    private String nationalId;

    private Instant birthDate;
    private Instant deathDate;

}
