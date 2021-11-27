package tech.becoming.medical.crm.patient.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

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

    private Instant birthDate;
    private Instant deathDate;

}
