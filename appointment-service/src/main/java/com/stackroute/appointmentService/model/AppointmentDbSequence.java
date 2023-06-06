package com.stackroute.appointmentService.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Appointment_db_sequence")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDbSequence {

    @Id
    private String idNor;
    private int sequence;

}
