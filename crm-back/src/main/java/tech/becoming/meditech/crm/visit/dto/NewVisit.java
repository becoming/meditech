package tech.becoming.meditech.crm.visit.dto;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public class NewVisit {

    private String name;
    private String description;

    private List<UUID> doctors;
    private List<UUID> patients;
    private List<UUID> procedures;

    private Instant start;
    private Instant end;
}
