package tech.becoming.medical.crm.common;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.Instant;

@Table(name = "IDENTITY", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class IdentityEntity extends BasicEntity {

    private String firstName;
    private String lastName;

    private String medicalId;
    private String nationalId;

    private Instant birthDate;
    private Instant deathDate;

}
