package tech.becoming.medical.crm.procedure.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDTO;
import tech.becoming.medical.crm.procedure.entity.MedicalProcedureEntity;

@NoArgsConstructor
@Getter
@Setter
public class ProcedureDTO extends BasicDTO {

    private MedicalProcedureEntity.Type type;
    private Long price;
    private String name;
    private String description;
    private String currency;

}
