package tech.becoming.medical.crm.patient.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.UUID;

@Entity
public class PatientAddress extends BasicEntity {

    @OneToOne(targetEntity = PatientDetails.class)
    private UUID detailsId;

    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;

}
