package tech.becoming.medical.crm.procedure;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.core.BasicEntity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Table(name = "MEDICAL_PROCEDURE", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalProcedure extends BasicEntity {

    public enum Type {
        CONSULTATION, INTERVENTION, CHIRURGICAL
    }

    private UUID businessId;

    @Enumerated(EnumType.STRING)
    private Type type;

    private Long price;

    private Instant scheduledDate;


}
