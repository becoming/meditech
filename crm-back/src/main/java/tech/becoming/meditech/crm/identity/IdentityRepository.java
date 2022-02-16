package tech.becoming.meditech.crm.identity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Repository
public interface IdentityRepository extends CrudRepository<IdentityEntity, UUID> {

    default Set<IdentityEntity> saveAndReturnList(Set<IdentityEntity> e) {
        Iterable<IdentityEntity> identities = saveAll(e);

        var result = new HashSet<IdentityEntity>();
        for (IdentityEntity identity : identities) {
            result.add(identity);
        }

        return result;
    }

}
