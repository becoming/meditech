package tech.becoming.meditech.crm.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.meditech.crm.patient.entity.PatientEntity;

import java.util.UUID;

public interface PatientRepository extends JpaRepository<PatientEntity, UUID> {
}
