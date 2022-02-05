# How to's 
>for the found issues while coding the project.

Pretty print json object

- https://stackoverflow.com/questions/16862627/json-stringify-output-to-div-in-pretty-print-way
- `JSON.stringify(data, undefined, 2)`

---

Dates are treated always as UTC with __ISO 8601__ standard
- `Instant` on the backend, the latest version of spring boot has the latest version of jackson who is converting to __ISO 8601__ string by default
- `new Date("2021-12-30T23:59:59.000Z")` on the frontend

---

- liquibase uuid h2
  - https://stackoverflow.com/a/16979111/1107450

- enum save as string
  - https://www.baeldung.com/jpa-persisting-enums-in-jpa

---

Custom handler for json exceptions, when using an extension of `ResponseEntityExceptionHandler`, you need to override functions instead of declaring `@ExceptionHandler`. This is because there is already a function to handle this kind of exceptions.

- org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler.handleException

```java
public class GenericExceptionHandler extends ResponseEntityExceptionHandler {
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        
        return handleExceptionInternal(ex, details, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
```

---

Interface with a field that's a lambda has to declare the return type after `=>` sign

```typescript
interface Props {
  onSave: (v: IdentityVO) => void // void is the return type
}
```

a compatible lambda will be `const onSave = (ignored: IdentityVO) => {}`
- where `{}` is the body of the lambda, not the return type.

---

Create custom hook
- this project has folders with custom hooks for precise cases
- one hook per file, file name has the name of the hook
- hook start with the word __use__, without additional verbs
    - OK `usePatient`
    - NOK `usePatientLoad` or `useLoadPatient`
- https://reactjs.org/docs/hooks-custom.html
- https://reactjs.org/docs/hooks-rules.html
- https://reactjs.org/docs/hooks-faq.html

---

Unsubscribe inside a `useEffect`
- https://stackoverflow.com/a/47330460/1107450
- https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f
- 

---

Reading path params with react router 6

- https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters
```javascript
// path="invoices/:invoiceId"

let params = useParams();
return <h1>Invoice {params.invoiceId}</h1>;
```
---

`useEffect()` "_constantly_" triggers itself

- https://stackoverflow.com/a/56767883/1107450
- for now, I've used a workaround, but I have to use a custom hook for that

---

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

useState with typed data

- https://www.carlrippon.com/typed-usestate-with-typescript/
- `let [items, setData] = useState<PatientVO[]>([]);`

---

