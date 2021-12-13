package tech.becoming.medical.crm.doctor.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import tech.becoming.medical.crm.core.BasicEntity;
import tech.becoming.medical.crm.info.Address;

import javax.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Table(name = "MEDICAL_LICENCE", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalLicence extends BasicEntity {

    private String value;
    private Instant expires;
    private Instant issued;
    private String issuer;

    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "BUSINESS_ID")
    private UUID businessId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "ADDRESS_ID")
    private Address address;

}
