package tech.becoming.meditech.crm.procedure.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.common.BasicDTO;
import tech.becoming.meditech.crm.procedure.entity.MedicalProcedureEntity;

@NoArgsConstructor
@Getter
@Setter
public class NewProcedureDTO extends BasicDTO {

    private MedicalProcedureEntity.Type type;
    private Long price;
    private String name;
    private String description;
    private String currency;

}
