package com.stackroute.services;

import com.stackroute.model.Patient;
import java.util.Optional;

public interface PatientService
{
    Patient createPatientProfile(Patient patient);

    Optional<Patient> findByEmailId(String patientEmail);

    Patient updatePatientProfile(Patient patient, String patientEmail);
}
