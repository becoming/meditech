package tech.becoming.medical.crm.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RequiredArgsConstructor
@EnableWebSecurity
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String EMPTY_LINE = "*                                 *";
    public static final String FULL_LINE = "***********************************";

    private static final String ADMIN = "admin";
    private static final String USER = "user";
    private static final String USER_SOFT_BLOCKED = "user_soft_blocked";

    private final SecurityProperties properties;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
       
    	if(properties.isEnabled()) {
            http
                    .authorizeRequests()
                    .antMatchers("/").permitAll()

                    .antMatchers("/index.html").permitAll()
                    .antMatchers("/public/**").permitAll()
                    .antMatchers("/favicon.ico").permitAll()
                    .antMatchers("/webjars/**").permitAll()

                    .antMatchers("/actuator/health").permitAll()
                    .antMatchers("/actuator/info").permitAll()
                    .antMatchers("/api/**").hasAnyRole(ADMIN, USER, USER_SOFT_BLOCKED)
                    .antMatchers("/**").authenticated()
                    .anyRequest().authenticated()
                    .and()
                    .cors()
                    .and()
                    .csrf().disable()
                    .oauth2ResourceServer().jwt();
        } else {
            log.error(FULL_LINE);
            log.error(EMPTY_LINE);
            log.error("*             WARNING             *");
            log.error("*       SECURITY IS DISABLED      *");
            log.error(EMPTY_LINE);
            log.error("* app.security.is-enable=false *");
            log.error(EMPTY_LINE);
            log.error(FULL_LINE);

            http
                    .authorizeRequests()
                    .anyRequest().permitAll()
                    .and()
                    .cors()
                    .and()
                    .csrf().disable()
                    .oauth2ResourceServer().jwt();
        }
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
    }
}
