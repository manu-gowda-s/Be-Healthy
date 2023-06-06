package com.stackroute.rabbitmq;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AppointmentDto {

    private String patientEmail;

    private String doctorEmail;

    private String appointmentDate;

    private String appointmentStartTime;

    private String appointmentEndTime;
}
