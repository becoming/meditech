# this-medical-experiment

- liquibase uuid h2
  - https://stackoverflow.com/a/16979111/1107450

- enum save as string
  - https://www.baeldung.com/jpa-persisting-enums-in-jpa

## Problems

Method springSecurityFilterChain in org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration required a bean of type 'org.springframework.security.oauth2.jwt.JwtDecoder' that could not be found.

> we can add required dependencies and min configuration for that 

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-oauth2-jose</artifactId>
  </dependency>
</dependencies>
```

```properties
spring.security.oauth2.resourceserver.jwt.issuer-uri=${OAUTH_ISSUER_URI:http://keycloak.localhost/auth/realms/tme}
spring.security.oauth2.resourceserver.jwt.jwk-set-uri=${OAUTH_JWK_URI:http://keycloak.localhost/auth/realms/tme/protocol/openid-connect/certs}
```
---

CORS not working properly

We can set up the cors manually and both allowed origins and allowed headers need to be set, otherwise request will be rejected.

The value for the CORS has to contain schema, domain and port or a wildcard. 
- http://localhost:3000
- *

> When using the annotation `@CrossOrigin("${api.cors.hosts}")` with a placeholder, the value of this placeholder has to be only one host.
> - OK `api.cors.hosts=http://localhost:3000`
> - NOK `api.cors.hosts=http://localhost:3000,http://becoming.tech`
> - NOT TESTED `api.cors.hosts=http://localhost:3000, http://becoming.tech` with _comma+space_ separator


Spring classes doing the check:
- `.m2/repository/org/springframework/spring-web/5.3.13/spring-web-5.3.13-sources.jar` --> `/org/springframework/web/cors/DefaultCorsProcessor.java:135`
- `.m2/repository/org/springframework/spring-web/5.3.13/spring-web-5.3.13-sources.jar` --> `/org/springframework/web/cors/CorsConfiguration.java:625`

```java
@Component
@Configuration
@ConfigurationProperties("app.http.security")
@Setter
@Getter
public class SecurityProperties {
   private List<String> cors;
    private List<String> headers;
}
```

```java
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    private final SecurityProperties properties;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
          http
                  /*...*/
                  .cors(cors -> cors.configurationSource(request -> corsConfiguration()))
                  /*...*/;
    }

    public CorsConfiguration corsConfiguration() {
        var cors = new CorsConfiguration();
        cors.setAllowedOrigins(properties.getCors());
        cors.setAllowedHeaders(properties.getHeaders());

        return cors;
    }
}
```

```properties
app.http.security.cors=http://localhost:3000,http://becoming.local:3000
app.http.security.headers=*

# Trace CORS issues
logging.level.org.springframework.web.cors=trace
```
---

Env variables in CRA reactjs

https://create-react-app.dev/docs/adding-custom-environment-variables/

- You need to restart the development server after changing .env files.
- To define permanent environment variables, create a file called .env in the root of your project
- `process.env.REACT_APP_NOT_SECRET_CODE`

---

