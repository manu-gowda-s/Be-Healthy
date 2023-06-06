package com.stackroute.services;

import com.stackroute.model.Doctor;
import java.util.List;
import java.util.Optional;

public interface DoctorService
{
    Doctor createDoctorProfile(Doctor doctor);

    Optional<Doctor> findById(String doctorEmail);

    List<Doctor> findDoctorBySpecialization(String specialization);

    Doctor updateDoctorProfile(Doctor doctor, String doctorEmail);

    List<Doctor> findHospital(String hospitalLocation);

    List<Doctor> getAllDoctors();

}
