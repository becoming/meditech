package tech.becoming.medical.crm.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.medical.crm.doctor.entity.DoctorEntity;

import java.util.UUID;

public interface DoctorRepository extends JpaRepository<DoctorEntity, UUID> {
}
