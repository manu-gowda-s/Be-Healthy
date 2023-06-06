package com.stackroute.appointmentService.service;


import com.stackroute.appointmentService.config.Producer;
import com.stackroute.appointmentService.model.Appointment;
import com.stackroute.appointmentService.model.Status;
import com.stackroute.appointmentService.rabbitmq.AppointmentDto;
import com.stackroute.appointmentService.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {


    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private Producer producer;

    @Override
    public Appointment createAppointment(Appointment appointment) {

        AppointmentDto appointmentDto = new AppointmentDto();

        appointmentDto.setPatientEmail(appointment.getPatientEmail());
        appointmentDto.setDoctorEmail(appointment.getDoctorEmail());
        appointmentDto.setAppointmentDate(String.valueOf(appointment.getAppointmentDate()));
        appointmentDto.setAppointmentStartTime(String.valueOf(appointment.getAppointmentStartTime()));
        appointmentDto.setAppointmentEndTime(String.valueOf(appointment.getAppointmentEndTime()));

        producer.sendMessageToConsumer(appointmentDto);
        return appointmentRepository.save(appointment);

    }

    @Override
    public Appointment updateAppointmentStatusByAppointmentId(int appointmentId) {
        Optional<Appointment> appointment = appointmentRepository.findById(appointmentId);
        Appointment appoint = appointment.get();
        appoint.setStatus(Status.COMPLETED);
        return appointmentRepository.save(appoint);
    }




    @Override
    public Appointment getAppointmentById(int appointmentId) {

        Optional<Appointment>  optional = appointmentRepository.findById(appointmentId);
        Appointment appoint = optional.get();
        return appoint;
    }

    @Override
    public List<Appointment> getAllAppointmentsByPatientEmail(String patientEmail) {

        List<Appointment> list= appointmentRepository.findByPatientEmail(patientEmail);
        return list;
    }

    @Override
    public List<Appointment> getAllAppointmentsByDoctorEmail(String doctorEmail) {
        List<Appointment> list= appointmentRepository.findByDoctorEmail(doctorEmail);
        return list;
    }

    @Override
    public void deleteByAppointmentId(int appointmentId) {
        appointmentRepository.deleteById(appointmentId);

    }


    @Override
    public List<Appointment> findAllAppointments() {
        List<Appointment> list = appointmentRepository.findAll();
        return list;
    }




}
