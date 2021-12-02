package tech.becoming.medical.crm.medicalservice;


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
public class MedicalService extends BasicEntity {

    private UUID businessId;

    private ServiceType type;

    private Long price;

    private Instant scheduledDate;


}
