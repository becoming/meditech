package tech.becoming.medical.crm.info;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface IdentityRepository extends CrudRepository<Identity, UUID> {

    default Set<Identity> saveAndReturnList(Set<Identity> e) {
        Iterable<Identity> identities = saveAll(e);

        var result = new HashSet<Identity>();
        for (Identity identity : identities) {
            result.add(identity);
        }

        return result;
    }

}
