package tech.becoming.medical.crm.common;

import io.vavr.control.Try;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/addresses")
public class AddressHttp {

    private final AddressService addressService;

    @GetMapping
    public Try<List<AddressDTO>> findByCountry(@RequestParam(defaultValue = "all") String country,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "50") int size){
        return addressService.findByCountry(country, PageRequest.of(page,size));
    }

    @PostMapping
    public Try<AddressDTO> createAddress(@RequestBody AddressDTO addressDTO){
        return addressService.createAddress(addressDTO);
    }
}
