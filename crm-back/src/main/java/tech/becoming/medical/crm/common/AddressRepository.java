package tech.becoming.medical.crm.common;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AddressRepository extends JpaRepository<AddressEntity, UUID> {

//    @Query("SELECT a FROM AddressEntity a where a.country = ?1")
    Page<AddressEntity> findAllByCountry(String country, Pageable p);
}
