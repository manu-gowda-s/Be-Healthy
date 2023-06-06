package com.stackroute.appointmentService.repository;

import com.stackroute.appointmentService.model.Timeslot;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface TimeslotRepository extends MongoRepository<Timeslot,Integer>{

    List<Timeslot> findBySlotDateAndDoctorEmail(LocalDate slotDate, String doctorEmail);


}
