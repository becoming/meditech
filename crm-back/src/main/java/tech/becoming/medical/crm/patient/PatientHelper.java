package tech.becoming.medical.crm.patient;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import tech.becoming.common.exceptions.BadRequestException;
import tech.becoming.common.exceptions.ExceptionDetail;
import tech.becoming.medical.crm.patient.dto.NewIdentityRequest;

import java.util.ArrayList;

@Slf4j
@Component
@RequiredArgsConstructor
class PatientHelper {

    private final PatientProperties properties;

    public NewIdentityRequest validate(NewIdentityRequest p) {
        var details = new ArrayList<ExceptionDetail>();

        if (isEmpty(p.getFirstName())) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "firstName",
                    "Please provide a first name.");

            details.add(i);
        }

        if (isEmpty(p.getLastName())) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "lastName",
                    "Please provide a last name.");

            details.add(i);
        }

        BadRequestException.throwIfHasDetails(details);

        return p;
    }

    public PageRequest validate(PageRequest p) {
        var details = new ArrayList<ExceptionDetail>();

        if (p.getPageNumber() < 0) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "page",
                    "Page value must be a positive number.");

            details.add(i);
        }

        if (p.getPageSize() < 0) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "size",
                    "Size value must be a positive number.");

            details.add(i);
        }

        if (p.getPageSize() > properties.getMaxPageSize()) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "size",
                    "Size value must be lower than " + properties.getMaxPageSize() + ", or equal.");

            details.add(i);
        }

        BadRequestException.throwIfHasDetails(details);

        return p;
    }

    private boolean isEmpty(String s) {
        return null == s || s.replace(" ", "").length() < 1;
    }
}
