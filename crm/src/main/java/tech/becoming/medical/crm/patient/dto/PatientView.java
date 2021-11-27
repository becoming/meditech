package tech.becoming.medical.crm.patient.dto;

import lombok.*;
import tech.becoming.medical.crm.patient.entity.Identity;

import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
public class PatientView extends BasicDto {

    private String id;

    private Identity identity;
    private Set<PatientAddressView> addresses;

}
