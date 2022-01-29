package tech.becoming.medical.crm.common;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import tech.becoming.common.exceptions.NotFoundException;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final AddressMapper addressMapper;

    public Try<List<AddressDTO>> findByCountry(String country, PageRequest p) {

        return Try.of(() -> p)
                .map(p1 -> this.findAllByCountry(country, p1))
                .map(addressMapper::toDTO)
                .onFailure(e -> log.error("Could not perform the find in range, e: {}", e.getMessage()));
    }

    public Try<AddressDTO> createAddress(NewAddressDTO newAddressDTO) {
        return Try.of(() -> newAddressDTO)
                .map(addressMapper::toNewEntity)
                .map(addressRepository::save)
                .map(addressMapper::toDto)
                .onFailure(e -> log.error("Could not create a new address, e: {}", e.getMessage()));
    }

    public Page<AddressEntity> findAllByCountry(String country, PageRequest p){
        if(country.equalsIgnoreCase("all")){
            return addressRepository.findAll(p);
        }
        return addressRepository.findAllByCountry(country, p);
    }

    public Try<AddressDTO> updateAddress(UUID addressId, AddressDTO addressDTO) {
        return Try.of(() -> addressId)
                .map(addressRepository::findById)
                .map(NotFoundException::throwIfEmpty)
                .map(it -> it.update(addressDTO))
                .map(addressRepository::save)
                .map(addressMapper::toDto);
    }
}
