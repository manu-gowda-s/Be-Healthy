package com.stackroute.controller;

import com.stackroute.Exception.ResourceNotFoundException;
import com.stackroute.model.Doctor;
import com.stackroute.model.Patient;
import com.stackroute.services.DoctorService;
import com.stackroute.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")

public class UserController
{
    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientService patientService;

    @Autowired
    public  UserController(DoctorService doctorService, PatientService patientService)
    {
        this.doctorService=doctorService;
        this.patientService=patientService;
    }

    //method to create a doctor record in db
    @PostMapping("/doctor")

    public ResponseEntity<Doctor> createDoctorProfile(@Valid @RequestBody Doctor doctor)
    {
        return new ResponseEntity<>(doctorService.createDoctorProfile(doctor), HttpStatus.CREATED);
    }

    //method to get doctor by emailID
    @GetMapping("/doctor/doctorEmail/{doctorEmail}")

    public ResponseEntity<?> getDoctorByEmail(@PathVariable ("doctorEmail") String doctorEmail) throws ResourceNotFoundException
    {
        Doctor doctor = doctorService.findById(doctorEmail).orElseThrow(() -> new ResourceNotFoundException
                ("Doctor is not exits with emailID" + doctorEmail) );
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

    //method to get doctor by specialization
    @GetMapping("/doctor/specialization/{specialization}")
    public ResponseEntity<List<Doctor>> findDoctorBySpecialization(@PathVariable ("specialization") String specialization)
    {
        List<Doctor> doctors = doctorService.findDoctorBySpecialization(specialization);
        return new ResponseEntity<List<Doctor>>(doctors, HttpStatus.OK);
    }

    //method to update doctor details by the emailId
    @PutMapping("/doctor/update/doctorEmail/{doctorEmail}")
    public ResponseEntity<Doctor> updateDoctorByEmail(@RequestBody Doctor doctor, @PathVariable ("doctorEmail") String doctorEmail)
            throws ResourceNotFoundException
    {
        doctorService.findById(doctorEmail).orElseThrow(() -> new ResourceNotFoundException
                ("Doctor is not exits with emailID"));
        return  new ResponseEntity<>(doctorService.updateDoctorProfile(doctor,doctorEmail), HttpStatus.CREATED);
    }

    //method to get hospitals based on Location
    @GetMapping("/doctor/hospitalLocation/{hospitalLocation}")
    public ResponseEntity<List<Doctor>> findHospitalByLocation(@PathVariable ("hospitalLocation") String hospitalLocation)
    {
        List<Doctor> hospitalList = doctorService.findHospital(hospitalLocation);
        return new ResponseEntity<List<Doctor>>(hospitalList, HttpStatus.OK);
    }

    //method to get all doctors
    @GetMapping("/doctor/getAllDoctor")
    public ResponseEntity<List<Doctor>> getAllTheDoctors()
    {
        List<Doctor> doctorList = doctorService.getAllDoctors();
        return new ResponseEntity<>(doctorList, HttpStatus.OK);
    }


    //method to create a Patient record in db

    @PostMapping("/patient")
    public ResponseEntity<Patient> createPatientProfile(@Valid @RequestBody Patient patient)
    {
        return new ResponseEntity<>(patientService.createPatientProfile(patient), HttpStatus.CREATED);
    }

    //method to get Patient by email
    @GetMapping("/patient/patientEmail/{patientEmail}")
    public ResponseEntity<?> getPatientByEmail(@PathVariable String patientEmail) throws ResourceNotFoundException
    {
        Patient patient = patientService.findByEmailId(patientEmail).orElseThrow(() -> new ResourceNotFoundException
                ("Patient is not there for the given mailID :" + patientEmail));
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    //method to update a patient profile by emailId
    @PutMapping("/update/patientEmail/{patientEmail}")
    public ResponseEntity<Patient> updatePatientDetails(@RequestBody Patient patient, @PathVariable String patientEmail)
            throws ResourceNotFoundException
    {
        patientService.findByEmailId(patientEmail).orElseThrow(()-> new ResourceNotFoundException
                ("Patient Email is not found :" + patientEmail));
        return new ResponseEntity<>(patientService.updatePatientProfile(patient, patientEmail), HttpStatus.CREATED);
    }


}
