package tech.becoming.medical.crm.procedure;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProcedureRepository extends JpaRepository<MedicalProcedure, UUID> {
}
