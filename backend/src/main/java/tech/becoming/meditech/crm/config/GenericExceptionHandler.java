package tech.becoming.meditech.crm.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import tech.becoming.common.exceptions.AbstractRuntimeException;
import tech.becoming.common.exceptions.HttpExceptionBody;

import static tech.becoming.common.constants.HttpStatusCode.BAD_REQUEST_400;

@ControllerAdvice
@Slf4j
public class GenericExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(AbstractRuntimeException.class)
    private ResponseEntity<Object> handleGenericExceptions(AbstractRuntimeException ex, WebRequest request) {

        var details = HttpExceptionBody.builder()
                .message(ex.toString())
                .status(ex.getHttpCode())
                .error(ex.getMessage())
                .path(((ServletWebRequest) request).getRequest().getRequestURI())
                .build();

        var status = HttpStatus.resolve(details.getStatus());
        status = status != null ? status : HttpStatus.I_AM_A_TEAPOT;

        return handleExceptionInternal(ex, details, new HttpHeaders(), status, request);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(
            HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        var details = HttpExceptionBody.builder()
                .message(ex.toString())
                .status(BAD_REQUEST_400)
                .error(ex.getMessage())
                .path(((ServletWebRequest) request).getRequest().getRequestURI())
                .build();

        log.debug(ex.getMessage());

        return handleExceptionInternal(ex, details, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }


}
