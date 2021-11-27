package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;


@Getter
@Setter
@NoArgsConstructor
public class PatientIdentityView extends BasicDto {

    private String firstName;
    private String lastName;

    private Instant birthDate;
    private Instant deathDate;

}
