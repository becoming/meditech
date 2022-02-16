package tech.becoming.meditech.crm.identity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.common.BasicEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.Instant;

@Table(name = "IDENTITY", schema = "MEDITECH")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class IdentityEntity extends BasicEntity {

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "MEDICAL_ID")
    private String medicalId;

    @Column(name = "NATIONAL_ID")
    private String nationalId;

    @Column(name = "BIRTH_DATE")
    private Instant birthDate;

    @Column(name = "DEATH_DATE")
    private Instant deathDate;

    public IdentityEntity update(IdentityDTO p) {
        firstName = p.getFirstName();
        lastName = p.getLastName();
        medicalId = p.getMedicalId();
        nationalId = p.getNationalId();
        birthDate = p.getBirthDate();
        deathDate = p.getDeathDate();

        setUpdated(Instant.now());

        return this;
    }
}
