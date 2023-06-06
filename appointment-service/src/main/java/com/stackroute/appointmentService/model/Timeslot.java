package com.stackroute.appointmentService.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalTime;

@Document(collection = "Timeslot")
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Timeslot {

  @Transient
   public static final String SEQUENCE_NAME = "user_sequence";

    public Timeslot(int slotId, String doctorEmail, LocalDate slotDate, LocalTime appointmentStartTime, LocalTime appointmentEndTime, Boolean slotAvailability) {
        this.slotId = slotId;
        this.doctorEmail = doctorEmail;
        this.slotDate = slotDate;
        this.appointmentStartTime = appointmentStartTime;
        this.appointmentEndTime = appointmentEndTime;
        this.slotAvailability = slotAvailability;
    }

    @Id
   private int slotId;
   private String doctorEmail;

    private LocalDate slotDate;

   private LocalTime appointmentStartTime;

   private LocalTime appointmentEndTime;

   private Boolean slotAvailability;

}
