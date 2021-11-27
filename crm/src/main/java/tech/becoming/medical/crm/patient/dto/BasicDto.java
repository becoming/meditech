package tech.becoming.medical.crm.patient.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

// why instant https://stackoverflow.com/questions/32437550/whats-the-difference-between-instant-and-localdatetime
// how to use it https://stackoverflow.com/a/45674593/1107450
@Getter
@Setter
public abstract class BasicDto {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss", timezone = "UTC")
    private Instant created;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss", timezone = "UTC")
    private Instant updated;

}
