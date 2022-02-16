package tech.becoming.meditech.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.address.AddressDTO;
import tech.becoming.meditech.crm.common.BasicDTO;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
public class MedicalLicenceDTO extends BasicDTO {
    private String value;
    private Instant expires;
    private Instant issued;
    private String issuer;
    private AddressDTO address;
}
