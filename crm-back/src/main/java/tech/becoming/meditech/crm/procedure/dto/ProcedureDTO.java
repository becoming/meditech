package tech.becoming.meditech.crm.procedure.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.meditech.crm.common.BasicDTO;
import tech.becoming.meditech.crm.procedure.entity.MedicalProcedureEntity;

import java.time.Instant;

@NoArgsConstructor
@Getter
@Setter
public class ProcedureDTO extends BasicDTO {

    private MedicalProcedureEntity.Type type;
    private Long price;
    private String name;
    private String description;
    private String currency;
    private Integer version;
    private Instant versionDate;

}
