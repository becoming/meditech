package tech.becoming.medical.crm.procedure;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.core.BasicEntity;

import javax.persistence.Entity;
import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicalProcedure extends BasicEntity {

    public enum Type {
        CONSULTATION, INTERVENTION, CHIRURGICAL
    }

    private UUID businessId;

    private Type type;

    private Long price;

    private Instant scheduledDate;


}
