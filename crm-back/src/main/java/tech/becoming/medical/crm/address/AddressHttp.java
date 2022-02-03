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

    @GetMapping
    public Try<List<AddressDTO>> find(@RequestParam(defaultValue = "all") String country,
                                      @RequestParam(defaultValue = "0") int page,
                                      @RequestParam(defaultValue = "50") int size){
        return addressService.find(country, PageRequest.of(page,size));
    }

    @PostMapping
    public Try<AddressDTO> create(@RequestBody NewAddressDTO newAddressDTO){
        return addressService.create(newAddressDTO);
    }

    @PutMapping("{addressId}")
    public Try<AddressDTO> update(@PathVariable UUID addressId,
                                  @RequestBody AddressDTO addressDTO){
        return addressService.update(addressId, addressDTO);
    }

    @DeleteMapping("{addressId}")
    public void delete(@PathVariable UUID addressId){
        addressService.delete(addressId);
    }
}
