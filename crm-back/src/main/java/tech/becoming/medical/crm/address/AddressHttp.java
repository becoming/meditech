package tech.becoming.medical.crm.address;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/addresses")
public class AddressHttp {

    private final AddressService addressService;

    @GetMapping("{id}")
    public Try<AddressDTO> findById(@PathVariable UUID id){
        return addressService.findById(id);
    }

    @GetMapping("all")
    public Try<List<AddressDTO>> findInRange(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "50") int size){
        return addressService.findInRange(PageRequest.of(page, size));
    }

    @GetMapping
    public Try<List<AddressDTO>> findByCountry(@RequestParam(defaultValue = "all") String country,
                                                  @RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "50") int size){
        return addressService.findByCountry(country, PageRequest.of(page,size));
    }

    @PostMapping
    public Try<AddressDTO> createAddress(@RequestBody NewAddressDTO newAddressDTO){
        return addressService.createAddress(newAddressDTO);
    }

    @PutMapping("{addressId}")
    public Try<AddressDTO> updateAddress(@PathVariable UUID addressId,
                                         @RequestBody AddressDTO addressDTO){
        return addressService.updateAddress(addressId, addressDTO);
    }

    @DeleteMapping("{addressId}")
    public void deleteAddress(@PathVariable UUID addressId){
        addressService.deleteAddress(addressId);
    }
}
