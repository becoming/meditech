package tech.becoming.medical.crm.config.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

@Slf4j
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String EMPTY_LINE = "*                                 *";
    public static final String FULL_LINE = "***********************************";

    private static final String ADMIN = "admin";
    private static final String USER = "user";

    private final SecurityProperties properties;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        if (properties.isEnabled()) {
            http
                    .authorizeRequests()
                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                    .antMatchers("/").permitAll()

                    .antMatchers("/index.html").permitAll()
                    .antMatchers("/public/**").permitAll()
                    .antMatchers("/favicon.ico").permitAll()
                    .antMatchers("/webjars/**").permitAll()

                    .antMatchers("/actuator/health").permitAll()
                    .antMatchers("/actuator/info").permitAll()
                    .antMatchers("/api/v1/**").hasAnyRole(ADMIN, USER)
                    .antMatchers("/**").authenticated()
                    .anyRequest().authenticated()
                    .and()
                    .cors(cors -> cors.configurationSource(request -> corsConfiguration()))
                    .csrf().disable()
                    .oauth2ResourceServer().jwt();
        } else {
            log.error(FULL_LINE);
            log.error(EMPTY_LINE);
            log.error("*             WARNING             *");
            log.error("*       SECURITY IS DISABLED      *");
            log.error(EMPTY_LINE);
            log.error("* app.security.enabled=false *");
            log.error(EMPTY_LINE);
            log.error(FULL_LINE);

            http
                    .authorizeRequests()
                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                    .anyRequest().permitAll()
                    .and()
                    .cors(cors -> cors.configurationSource(request -> corsConfiguration()))
                    .csrf().disable()
                    .oauth2ResourceServer().jwt();
        }
    }

    public CorsConfiguration corsConfiguration() {
        var cors = new CorsConfiguration();
        cors.setAllowedOrigins(properties.getCors());
        cors.setAllowedHeaders(properties.getHeaders());

        return cors;
    }
}
