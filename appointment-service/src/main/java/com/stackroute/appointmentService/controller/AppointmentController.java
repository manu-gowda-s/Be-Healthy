package com.stackroute.appointmentService.controller;

import com.stackroute.appointmentService.model.Appointment;
import com.stackroute.appointmentService.model.Status;
import com.stackroute.appointmentService.model.Timeslot;
import com.stackroute.appointmentService.service.AppointmentService;
import com.stackroute.appointmentService.service.AppointmentSequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    public AppointmentSequenceGeneratorService sequenceService;

    // to save appointment

    @PostMapping("/saveAppointment")
    public ResponseEntity<Appointment> saveAppointment(@RequestBody Appointment appointment) {
        appointment.setAppointmentId(sequenceService.getSequence(Appointment.Sequence_Name));
        appointment.setStatus(Status.UPCOMING);
        Appointment appoint = appointmentService.createAppointment(appointment);
        return new ResponseEntity(appoint, HttpStatus.CREATED);
    }

    // to update appointmentStatus by appointmentId
    @PatchMapping("/updateAppointmentStatusByAppointmentId/{appointmentId}")
    public ResponseEntity<Appointment> updateAppointmentStatus(@PathVariable(name="appointmentId" ) int appointmentId) {
        Appointment appointment = appointmentService.updateAppointmentStatusByAppointmentId(appointmentId);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }


    // to get appointment by appointmentId
        @GetMapping("/getAppointmentByAppointmentId/{appointmentId}")
    public ResponseEntity<Appointment> getAppointmentsByAppointmentId(@PathVariable("appointmentId") int appointmentId){
        Appointment appointment =  appointmentService.getAppointmentById(appointmentId);
        return new ResponseEntity(appointment, HttpStatus.OK);
    }


    //to get appointment by patientEmail
    @GetMapping("/getAppointmentsByPatientEmail/{patientEmail}")
    public ResponseEntity<Appointment> getAppointmentsByPatientEmail(@PathVariable("patientEmail") String patientEmail){
       List<Appointment> appointments=  appointmentService.getAllAppointmentsByPatientEmail(patientEmail);
       return new ResponseEntity(appointments, HttpStatus.OK);
    }

    //to get appointment by doctorEmail
    @GetMapping("/getAppointmentsByDoctorEmail/{doctorEmail}")
    public ResponseEntity<Appointment> getAppointmentsByDoctorEmail(@PathVariable("doctorEmail") String doctorEmail){
        List<Appointment> appointments=  appointmentService.getAllAppointmentsByDoctorEmail(doctorEmail);
        return new ResponseEntity(appointments, HttpStatus.OK);
    }


    // to delete appointment by appointmentId
    @DeleteMapping("/deleteAppointmentsByAppointmentId/{appointmentId}")
    public ResponseEntity<String> deleteAppointmentsByAppointmentId(@PathVariable("appointmentId") int appointmentId){
         appointmentService.deleteByAppointmentId(appointmentId);
        return new ResponseEntity<String>("Appointment deleted successfully..!!", HttpStatus.OK);
    }


    @GetMapping("getAllAppointments")
    public ResponseEntity<List<Appointment>> getAllAppointments(){

        List<Appointment> allAppointments = appointmentService.findAllAppointments();
        return new ResponseEntity<>(allAppointments,HttpStatus.FOUND);
    }


}
