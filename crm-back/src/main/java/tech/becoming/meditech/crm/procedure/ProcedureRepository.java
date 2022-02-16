package tech.becoming.meditech.crm.procedure;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.meditech.crm.procedure.entity.MedicalProcedureEntity;

import java.util.UUID;

public interface ProcedureRepository extends JpaRepository<MedicalProcedureEntity, UUID> {
}
