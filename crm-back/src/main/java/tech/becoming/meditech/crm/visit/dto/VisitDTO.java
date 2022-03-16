package tech.becoming.meditech.crm.visit.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class VisitDTO {

    private String name;
    private String description;

    private List<UUID> doctors;
    private List<UUID> patients;
    private List<UUID> procedures;

    private Instant start;
    private Instant end;

}
