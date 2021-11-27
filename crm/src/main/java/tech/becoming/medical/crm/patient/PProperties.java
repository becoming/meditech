package tech.becoming.medical.crm.patient;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("app.patient")
public class PProperties {

    private int maxPageSize = 50;

    @Setter(value = AccessLevel.NONE)
    private int minPageSize = 1;

}
