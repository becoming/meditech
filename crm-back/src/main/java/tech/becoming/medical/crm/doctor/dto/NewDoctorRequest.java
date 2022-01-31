package tech.becoming.medical.crm.doctor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewDoctorRequest {
    private String title;
    private String firstName;
    private String lastName;
}
