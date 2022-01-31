package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.address.AddressDTO;
import tech.becoming.medical.crm.common.BasicDto;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class MedicalLicenceView extends BasicDto {
    private String value;
    private Instant expires;
    private Instant issued;
    private String issuer;
    private UUID businessId;
    private AddressDTO address;
}
