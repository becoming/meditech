package tech.becoming.medical.crm.patient.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import tech.becoming.medical.crm.address.AddressEntity;
import tech.becoming.medical.crm.common.BasicEntity;
import tech.becoming.medical.crm.common.IdentityEntity;

import javax.persistence.*;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

@Table(name = "PATIENT", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class PatientEntity extends BasicEntity {

    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "BUSINESS_ID")
    private UUID businessId;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "IDENTITY_ID")
    private IdentityEntity identity;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "J_PATIENT_ADDRESS", schema = "TME",
            joinColumns = @JoinColumn(name = "PATIENT_ID"),
            inverseJoinColumns = @JoinColumn(name = "ADDRESS_ID")
    )
    private Set<AddressEntity> addresses;

    public boolean hasIdentityId(UUID identityId) {
        return identity.getId().equals(identityId);
    }

    public static PatientEntity setupNew(IdentityEntity identity) {
        var now = Instant.now();

        identity.setCreated(now);
        identity.setUpdated(now);

        var p = new PatientEntity();
        p.setBusinessId(UUID.randomUUID());
        p.setIdentity(identity);
        p.setCreated(now);
        p.setUpdated(now);

        return p;
    }
}
