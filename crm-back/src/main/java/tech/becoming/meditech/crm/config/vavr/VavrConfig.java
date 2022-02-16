package tech.becoming.meditech.crm.config.vavr;

import com.fasterxml.jackson.databind.Module;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class VavrConfig {

    @Bean
    public Module getTryModule() {
        return new TryModule();
    }
}
