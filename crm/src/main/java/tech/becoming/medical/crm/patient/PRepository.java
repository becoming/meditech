package tech.becoming.medical.crm.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.medical.crm.patient.entity.Patient;

import java.util.UUID;

public interface PRepository extends JpaRepository<Patient, UUID> {
}
