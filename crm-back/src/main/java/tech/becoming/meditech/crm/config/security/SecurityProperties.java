package tech.becoming.meditech.crm.config.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;

import static tech.becoming.common.constants.HttpMethod.*;

@Component
@Configuration
@ConfigurationProperties("app.http.security")
@Setter
@Getter
public class SecurityProperties {

    private boolean enabled;
    private List<String> cors;
    private List<String> headers;
    private List<String> methods = List.of(GET, POST, PUT, DELETE, OPTIONS, HEAD);
}
