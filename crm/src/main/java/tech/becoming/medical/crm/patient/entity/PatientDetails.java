package tech.becoming.medical.crm.patient.entity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

@Entity
public class PatientDetails extends BasicEntity {

    @OneToOne(targetEntity = Patient.class)
    private UUID patientId;

    private String firstName;
    private String lastName;

    private Instant birthDate;
    private Instant deathDate;

    @OneToMany
    private Set<PatientAddress> addresses;
}
