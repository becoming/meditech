# this-medical-experiment

- liquibase uuid h2
  - https://stackoverflow.com/a/16979111/1107450

- enum save as string
  - https://www.baeldung.com/jpa-persisting-enums-in-jpa

## exceptions

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
===
