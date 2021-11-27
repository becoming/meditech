package tech.becoming.medical.crm.patient.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Address extends BasicEntity {

    @OneToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;

}
