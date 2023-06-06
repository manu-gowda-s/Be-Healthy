package com.stackroute.services;

import com.stackroute.model.Doctor;
import com.stackroute.config.Producer;
import com.stackroute.repositories.DoctorRepository;
import com.stackroute.rabbitMq.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorServiceImpl implements DoctorService
{

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private Producer publisher;

    @Autowired
    public DoctorServiceImpl(DoctorRepository doctorRepository, Producer publisher){
        this.doctorRepository=doctorRepository;
        this.publisher=publisher;
    }

    @Override
    public Doctor createDoctorProfile(Doctor doctor)
    {
        UserDto userDto = new UserDto();
        userDto.setEmailId(doctor.getDoctorEmail());
        userDto.setPassword(doctor.getDoctorPassword());
        userDto.setUserRole(doctor.getUserRole());

        publisher.sendMessageToConsumer(userDto);
        return doctorRepository.save(doctor);

    }

    @Override
    public Optional<Doctor> findById(String doctorEmail)
    {
        return doctorRepository.findById(doctorEmail);
    }

    @Override
    public List<Doctor> findDoctorBySpecialization(String specialization)
    {
        List<Doctor> doctors =doctorRepository.findBySpecialization(specialization);
        return doctors;
    }

    @Override
    public Doctor updateDoctorProfile(Doctor doctor, String doctorEmail)
    {
        return doctorRepository.save(doctor);
    }

    @Override
    public List<Doctor> findHospital(String hospitalLocation)
    {
        List<Doctor> hospitals = doctorRepository.findByHospitalLocation(hospitalLocation);
        return hospitals;
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }


}
