package tech.becoming.medical.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
public class AddressDTO extends NewAddressDTO {
    private String id;

    private Instant created;
    private Instant updated;
}
