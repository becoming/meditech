package tech.becoming.medical.crm.procedure.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicDTO;
import tech.becoming.medical.crm.procedure.entity.MedicalProcedureEntity;

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