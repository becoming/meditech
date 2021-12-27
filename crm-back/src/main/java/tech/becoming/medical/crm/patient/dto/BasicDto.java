package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

// why instant https://stackoverflow.com/questions/32437550/whats-the-difference-between-instant-and-localdatetime
// how to use it https://stackoverflow.com/a/45674593/1107450
@Getter
@Setter
public abstract class BasicDto {

    private String id;

    private Instant created;
    private Instant updated;

}
