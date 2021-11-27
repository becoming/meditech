package tech.becoming.medical.crm.patient;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import tech.becoming.common.exceptions.BadRequestException;
import tech.becoming.common.exceptions.ExceptionDetail;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
class PatientHelper {

    private final PatientProperties properties;

    public PageRequest validatePage(PageRequest pageRequest) {
        List<ExceptionDetail> details = new ArrayList<>();

        if (pageRequest.getPageNumber() < 0) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "page",
                    "Page value must be a positive number.");

            details.add(i);
        }

        if (pageRequest.getPageSize() < 0) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "size",
                    "Size value must be a positive number.");

            details.add(i);
        }

        if (pageRequest.getPageSize() > properties.getMaxPageSize()) {
            var i = ExceptionDetail.ofNameAndMessage(
                    "size",
                    "Size value must be lower than " + properties.getMaxPageSize() + ", or equal.");

            details.add(i);
        }

        BadRequestException.throwIfHasDetails(details);

        return pageRequest;
    }

    private boolean isEmpty(String s) {
        return null == s || s.replace(" ", "").length() < 1;
    }
}
