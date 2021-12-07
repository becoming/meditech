package tech.becoming.medical.crm.patient.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

import static tech.becoming.common.constants.DateTime.UTC;
import static tech.becoming.common.constants.DateTime.dd_MM_yyyy_HH_mm_ss;

@Getter
@Setter
@NoArgsConstructor
public class PatientIdentityView extends BasicDto {

    private String firstName;
    private String lastName;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = dd_MM_yyyy_HH_mm_ss, timezone = UTC)
    private Instant birthDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = dd_MM_yyyy_HH_mm_ss, timezone = UTC)
    private Instant deathDate;

}