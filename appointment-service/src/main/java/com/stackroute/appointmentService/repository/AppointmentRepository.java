package com.stackroute.appointmentService.repository;

import com.stackroute.appointmentService.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment,Integer> {

    List<Appointment> findByPatientEmail(String patientEmail);

    List<Appointment> findByDoctorEmail(String doctorEmail);



}
