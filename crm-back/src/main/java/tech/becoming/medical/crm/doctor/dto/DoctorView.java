package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class DoctorView {

    private String id;

    private MedicalLicenceView licence;

    private IdentityView identity;

    private Set<AddressView> addresses;
}
