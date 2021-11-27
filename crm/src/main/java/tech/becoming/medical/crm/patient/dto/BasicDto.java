package tech.becoming.medical.crm.patient.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

import static tech.becoming.common.constants.DateTime.UTC;
import static tech.becoming.common.constants.DateTime.dd_MM_yyyy_HH_mm_ss;

// why instant https://stackoverflow.com/questions/32437550/whats-the-difference-between-instant-and-localdatetime
// how to use it https://stackoverflow.com/a/45674593/1107450
@Getter
@Setter
public abstract class BasicDto {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = dd_MM_yyyy_HH_mm_ss, timezone = UTC)
    private Instant created;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = dd_MM_yyyy_HH_mm_ss, timezone = UTC)
    private Instant updated;

}
