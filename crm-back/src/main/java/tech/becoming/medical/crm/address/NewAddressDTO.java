package tech.becoming.medical.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewAddressDTO {
    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;

}
