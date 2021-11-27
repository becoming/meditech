package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
public abstract class BasicDto {

    private Instant created;
    private Instant updated;

}
