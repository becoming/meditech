package tech.becoming.medical.crm.procedure;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

//https://www.baeldung.com/mapstruct#1-modify-the-mapper
//https://www.baeldung.com/mapstruct-custom-mapper#custom-mapper-annotation
//https://www.baeldung.com/mapstruct-ignore-unmapped-properties#ignore-specific-fields
//https://stackoverflow.com/a/62548185/1107450
@Mapper(componentModel = "spring")
public interface ProcedureMapper {

    default List<ProcedureView> toDto(Page<MedicalProcedure> v) {
        return v.map(this::toDto)
                .getContent();
    }

    ProcedureView toDto(MedicalProcedure v);

    default UUID toUUID(String v) {
        return v != null ? UUID.fromString(v) : null;
    }

    default String toString(UUID v) {
        return v != null ? v.toString() : null;
    }

    default Set<ProcedureView> toDto(Iterable<MedicalProcedure> v) {
        var result = new HashSet<ProcedureView>();
        v.forEach(item -> result.add(toDto(item)));

        return result;
    }

    MedicalProcedure toEntity(ProcedureView v);
}