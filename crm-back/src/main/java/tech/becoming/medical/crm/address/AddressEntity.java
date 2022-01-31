package tech.becoming.medical.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicEntity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Table(name = "ADDRESS", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class AddressEntity extends BasicEntity {

    public enum Type { PERSONAL, BUSINESS }

    private String number;
    private String street;
    private String zipCode;
    private String city;
    private String region;
    private String department;
    private String country;

//    https://www.baeldung.com/jpa-persisting-enums-in-jpa
    @Enumerated(EnumType.STRING)
    private Type type;

    private String details;

    public AddressEntity update(AddressDTO addressDTO){
        number = addressDTO.getNumber();
        street = addressDTO.getStreet();
        zipCode = addressDTO.getZipCode();
        city = addressDTO.getCity();
        region = addressDTO.getRegion();
        department = addressDTO.getDepartment();
        country = addressDTO.getCountry();

        setUpdated(Instant.now());

        return this;
    }
}
