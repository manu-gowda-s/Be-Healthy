package com.stackroute.services;

import com.stackroute.model.Patient;
import com.stackroute.config.Producer;
import com.stackroute.repositories.PatientRepository;
import com.stackroute.rabbitMq.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService
{

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private Producer publisher;

    @Override
    public Patient createPatientProfile(Patient patient)
    {
        UserDto userDto = new UserDto();
        userDto.setEmailId(patient.getPatientEmail());
        userDto.setPassword(patient.getPatientPassword());
        userDto.setUserRole(patient.getUserRole());

        publisher.sendMessageToConsumer(userDto);
        return patientRepository.save(patient);
    }

    @Override
    public Optional<Patient> findByEmailId(String patientEmail)
    {
        return patientRepository.findById(patientEmail);
    }

    @Override
    public Patient updatePatientProfile(Patient patient, String patientEmail)
    {
        return patientRepository.save(patient);
    }


}
