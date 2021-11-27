package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatientAddressView extends BasicDto {

    private String id;

    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;

}
