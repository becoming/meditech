package tech.becoming.meditech.crm.patient;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("app.patient")
public class PatientProperties {

    private int maxPageSize = 50;

    @Setter(value = AccessLevel.NONE)
    private int minPageSize = 1;

}
