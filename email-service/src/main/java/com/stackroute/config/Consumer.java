package com.stackroute.config;

import com.stackroute.rabbitmq.AppointmentDto;
import com.stackroute.model.Email;
import com.stackroute.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;


@Configuration
public class Consumer {

    @Autowired
    EmailService emailService;


    @RabbitListener(queues ="app_queue")
    public void consumeAppointmentDetails(AppointmentDto appointmentDto)
    {
        System.out.println(appointmentDto.toString());
        Email email = new Email();
        email.setTo(appointmentDto.getPatientEmail());
        email.setSubject("BeHealthy Appointment Details");
        email.setMessage(" Dear Patient, " + System.lineSeparator()+
                " Your Appointment is booked with this doctor "+appointmentDto.getDoctorEmail().toString() +
                "  on :- " + appointmentDto.getAppointmentDate().toString()+"." +
                " Your Appointment will begin at :- "+ appointmentDto.getAppointmentStartTime().toString() +
                " & your Appointment ends at :- " + appointmentDto.getAppointmentEndTime().toString()+"." +System.lineSeparator()+
                "For any queries feel free to reach us. "+System.lineSeparator()+
                " BeHealthy wishes you a speedy recovery..Thank You...!! " );

        emailService.sendEmail(email);
    }

}
