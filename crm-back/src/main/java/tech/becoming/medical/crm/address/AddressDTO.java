package tech.becoming.medical.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDto;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class AddressDTO extends NewAddressDTO {
    private String id;

    private Instant created;
    private Instant updated;
}
