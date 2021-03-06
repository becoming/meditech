package tech.becoming.meditech.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.common.BasicDTO;

@Getter
@Setter
@NoArgsConstructor
public class AddressDTO extends BasicDTO {
    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;
}
