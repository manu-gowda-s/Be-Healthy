package com.stackroute.appointmentService.service;


import com.stackroute.appointmentService.model.Timeslot;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


public interface TimeslotService {

    Timeslot createSlot(Timeslot timeslot);


    Timeslot updateSlotAvailabilityBySlotId(int slotId);


    List<Timeslot> getSlotByDateAndDoctorEmail(LocalDate slotDate, String doctorEmail);

    List<Timeslot> findAllTimeslots();

    Timeslot updateTimeslot(int slotId, Timeslot timeslot);

    void deleteTimeslot(int slotId);
}
