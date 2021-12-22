package tech.becoming.medical.crm.patient.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewIdentityRequest {
    private String title;
    private String firstName;
    private String lastName;
}
