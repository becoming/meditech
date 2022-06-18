package tech.becoming.meditech.crm.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.meditech.crm.doctor.entity.DoctorEntity;

import java.util.UUID;

public interface DoctorRepository extends JpaRepository<DoctorEntity, UUID> {
}
