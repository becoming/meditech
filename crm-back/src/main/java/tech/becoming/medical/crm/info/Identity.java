package tech.becoming.medical.crm.info;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.core.BasicEntity;

import javax.persistence.Entity;
import java.time.Instant;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Identity extends BasicEntity {

    private String firstName;
    private String lastName;

    private String medicalId;
    private String nationalId;

    private Instant birthDate;
    private Instant deathDate;

}