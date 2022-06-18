package tech.becoming.meditech.crm.procedure.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.common.BasicEntity;
import tech.becoming.meditech.crm.procedure.dto.ProcedureDTO;

import javax.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Table(name = "MEDICAL_PROCEDURE", schema = "MEDITECH")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalProcedureEntity extends BasicEntity {

    public enum Type {
        CONSULTATION, INTERVENTION, CHIRURGICAL
    }

    @Column(name = "BUSINESS_ID")
    private UUID businessId;

    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE")
    private Type type;

    @Column(name = "PRICE")
    private Long price;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CURRENCY")
    private String currency;

    @Column(name = "VERSION")
    private Integer version;

    @Column(name = "VERSION_DATE")
    private Instant versionDate;

    public MedicalProcedureEntity setupNew() {
        var now = Instant.now();
        setCreated(now);
        setUpdated(now);
        versionDate = now;
        businessId = UUID.randomUUID();
        version = 1;

        return this;
    }

    public MedicalProcedureEntity update(ProcedureDTO dto) {
        var now = Instant.now();
        setUpdated(now);
        versionDate = now;
        version = version + 1;

        name = dto.getName();
        description = dto.getDescription();
        price = dto.getPrice();
        currency = dto.getCurrency();

        return this;
    }
}
