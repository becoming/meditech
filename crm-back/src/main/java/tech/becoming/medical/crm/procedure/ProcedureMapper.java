package tech.becoming.medical.crm.procedure;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import tech.becoming.medical.crm.procedure.dto.NewProcedureDTO;
import tech.becoming.medical.crm.procedure.dto.ProcedureDTO;
import tech.becoming.medical.crm.procedure.entity.MedicalProcedureEntity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper
public interface ProcedureMapper {

    default List<ProcedureDTO> toDto(Page<MedicalProcedureEntity> v) {
        return v.map(this::toDto)
                .getContent();
    }

    ProcedureDTO toDto(MedicalProcedureEntity v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<ProcedureDTO> toDto(Iterable<MedicalProcedureEntity> v) {
        var result = new HashSet<ProcedureDTO>();
        v.forEach(item -> result.add(toDto(item)));

        return result;
    }

    MedicalProcedureEntity toEntity(NewProcedureDTO v);
}
