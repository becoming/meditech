package tech.becoming.medical.crm.doctor.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.core.BasicEntity;
import tech.becoming.medical.crm.info.Address;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalLicence extends BasicEntity {

    private String value;
    private Instant expires;
    private Instant issued;
    private String issuer;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(referencedColumnName = "address_id")
    private Address address;

}
