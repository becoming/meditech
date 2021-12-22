package tech.becoming.medical.crm.patient.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import tech.becoming.medical.crm.common.BasicEntity;
import tech.becoming.medical.crm.common.AddressEntity;
import tech.becoming.medical.crm.common.IdentityEntity;

import javax.persistence.*;
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
}
