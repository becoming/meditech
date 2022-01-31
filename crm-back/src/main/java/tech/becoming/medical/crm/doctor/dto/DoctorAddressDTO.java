package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDto;

@Getter
@Setter
@NoArgsConstructor
public class DoctorAddressDTO extends BasicDto {
    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;
}
