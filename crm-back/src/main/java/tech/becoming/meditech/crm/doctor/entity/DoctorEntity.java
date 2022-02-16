package tech.becoming.meditech.crm.doctor.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import tech.becoming.meditech.crm.address.AddressEntity;
import tech.becoming.meditech.crm.common.BasicEntity;
import tech.becoming.meditech.crm.identity.IdentityEntity;

import javax.persistence.*;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

@Table(name = "DOCTOR", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class DoctorEntity extends BasicEntity {

    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "BUSINESS_ID")
    private UUID businessId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "LICENSE_ID")
    private MedicalLicenceEntity licence;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "IDENTITY_ID")
    private IdentityEntity identity;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "J_DOCTOR_ADDRESS", schema = "TME",
            joinColumns = @JoinColumn(name = "DOCTOR_ID"),
            inverseJoinColumns = @JoinColumn(name = "ADDRESS_ID")
    )
    private Set<AddressEntity> addresses;

    public static DoctorEntity setupNew(IdentityEntity identity) {
        var now = Instant.now();

        identity.setCreated(now);
        identity.setUpdated(now);

        var p = new DoctorEntity();
        p.setBusinessId(UUID.randomUUID());
        p.setIdentity(identity);
        p.setCreated(now);
        p.setUpdated(now);

        return p;
    }
}
