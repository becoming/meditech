package tech.becoming.medical.crm.patient.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PatientView extends BasicDto {

    private String id;

    private PatientDetailsView details;

}
