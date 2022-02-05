package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.address.AddressDTO;
import tech.becoming.medical.crm.common.BasicDTO;

import java.time.Instant;
import java.util.UUID;

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
