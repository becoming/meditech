package tech.becoming.medical.crm.doctor.dto;

import java.util.Set;

public class DoctorView {

    private String id;

    private MedicalLicenceView licence;

    private IdentityView identity;

    private Set<AddressView> addresses;
}
