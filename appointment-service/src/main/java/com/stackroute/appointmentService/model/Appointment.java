package com.stackroute.appointmentService.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalTime;


@Document(collection="Appointment")
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Appointment{


    @Transient
    public static final String Sequence_Name = "Appointment_Sequence";

    public Appointment(int appointmentId, String doctorName, String doctorEmail, LocalDate appointmentDate, LocalTime appointmentStartTime, LocalTime appointmentEndTime, String patientEmail, String patientDescription, Status status) {
        this.appointmentId = appointmentId;
        this.doctorName = doctorName;
        this.doctorEmail = doctorEmail;
        this.appointmentDate = appointmentDate;
        this.appointmentStartTime = appointmentStartTime;
        this.appointmentEndTime = appointmentEndTime;
        this.patientEmail = patientEmail;
        this.patientDescription = patientDescription;
        this.status = status;
    }

    @Id
    private int appointmentId;

    private String doctorName;
    private String doctorEmail;

    private LocalDate appointmentDate;

    private LocalTime appointmentStartTime;

    private LocalTime appointmentEndTime;

    private int slotId;
    private String patientEmail;
    private String patientDescription;

    private Status status;
}
