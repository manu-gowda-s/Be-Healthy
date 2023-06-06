package com.stackroute.appointmentService.rabbitmq;


import lombok.*;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto {

    private String patientEmail;
    private String doctorEmail;
    private String appointmentDate;
    private String appointmentStartTime;
    private String appointmentEndTime;


}