package tech.becoming.medical.crm.common;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

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
}
