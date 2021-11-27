package tech.becoming.medical.crm.patient.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class Patient extends BasicEntity {

    @OneToOne
    private PatientDetails details;

}
