package tech.becoming.medical.crm.common;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final AddressMapper addressMapper;

    public Try<List<AddressDTO>> findByCountry(String country, PageRequest p) {

        return Try.of(() -> p)
                .map(p1 -> addressRepository.findAllByCountry(country, p1))
                .map(addressMapper::toDTO)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<AddressDTO> createAddress(AddressDTO addressDTO) {
        return Try.of(() -> addressDTO)
                .map(addressMapper::toEntity)
                .map(addressRepository::save)
                .map(addressMapper::toDto)
                .onFailure(e -> log.error("Could not create a new address, e: {}", e.getMessage()));
    }
}
