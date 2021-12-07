package tech.becoming.medical.crm.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.becoming.medical.crm.doctor.entity.Doctor;

import java.util.UUID;

public interface DoctorRepository extends JpaRepository<Doctor, UUID> {
}
