package tech.becoming.medical.crm.address;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tech.becoming.medical.crm.common.BasicEntity;

import javax.persistence.*;
import java.time.Instant;

@Table(name = "ADDRESS", schema = "TME")
@Entity
@Getter
@Setter
@NoArgsConstructor
public class AddressEntity extends BasicEntity {

    public enum Type { PERSONAL, BUSINESS }

    @Column(name = "NUMBER")
    private String number;

    @Column(name = "STREET")
    private String street;

    @Column(name = "ZIP_CODE")
    private String zipCode;

    @Column(name = "CITY")
    private String city;

    @Column(name = "REGION")
    private String region;

    @Column(name = "DEPARTMENT")
    private String department;

    @Column(name = "COUNTRY")
    private String country;

//    https://www.baeldung.com/jpa-persisting-enums-in-jpa
    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE")
    private Type type;

    @Column(name = "DETAILS")
    private String details;

    public AddressEntity setupNew() {
        setCreated(Instant.now());
        setUpdated(Instant.now());

        return this;
    }

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
