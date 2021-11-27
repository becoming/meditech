package tech.becoming.medical.crm.patient.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.time.Instant;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Identity extends BasicEntity {

    @OneToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private String firstName;
    private String lastName;

    private String medicalId;
    private String nationalId;

    private Instant birthDate;
    private Instant deathDate;

}
