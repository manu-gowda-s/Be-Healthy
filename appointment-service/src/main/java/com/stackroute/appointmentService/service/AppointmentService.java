package com.stackroute.appointmentService.service;

import com.stackroute.appointmentService.model.Appointment;
import com.stackroute.appointmentService.model.Timeslot;

import java.util.List;

public interface AppointmentService {
    Appointment createAppointment(Appointment appointment);


    Appointment updateAppointmentStatusByAppointmentId(int appointmentId);

    Appointment getAppointmentById(int appointmentId);

    List<Appointment> getAllAppointmentsByPatientEmail(String patientEmail);

    List<Appointment> getAllAppointmentsByDoctorEmail(String doctorEmail);


    void deleteByAppointmentId(int appointmentId);

    List<Appointment> findAllAppointments();



}
