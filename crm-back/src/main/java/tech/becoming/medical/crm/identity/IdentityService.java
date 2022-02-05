package tech.becoming.medical.crm.identity;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.NotFoundException;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class IdentityService {

    private final IdentityRepository identityRepository;
    private final IdentityMapper mapper;

    public Try<IdentityDTO> getIdentity(UUID identityId) {
        return Try.of(() -> identityId)
                .map($ -> identityRepository.findById(identityId))
                .map(NotFoundException::throwIfEmpty)
                .map(mapper::toDto);
    }

    public Try<IdentityDTO> updateIdentity(UUID identityId, IdentityDTO p) {
        return Try.of(() -> identityId)
                .map($ -> identityRepository.findById(identityId))
                .map(NotFoundException::throwIfEmpty)
                .map(it -> it.update(p))
                .map(identityRepository::save)
                .map(mapper::toDto);
    }

}
