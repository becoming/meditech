package tech.becoming.medical.crm.identity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDTO;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
public class IdentityDTO extends BasicDTO {

    private String firstName;
    private String lastName;

    private String medicalId;
    private String nationalId;

    private Instant birthDate;
    private Instant deathDate;

}
