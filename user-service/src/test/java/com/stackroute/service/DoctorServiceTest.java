package com.stackroute.service;

import com.stackroute.model.Doctor;
import com.stackroute.model.Gender;
import com.stackroute.model.UserRole;
import com.stackroute.repositories.DoctorRepository;
import com.stackroute.services.DoctorServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DoctorServiceTest
{
    @Mock
    private DoctorRepository doctorRepository;

    @InjectMocks
    private DoctorServiceImpl doctorServiceImpl;
    private List<Doctor> doctors;
    private Doctor doctor;
    private Optional optional;

    @BeforeEach
    public void setUp()
    {
        MockitoAnnotations.initMocks(this);

        doctor = new Doctor("d1@gmail.com","2344", UserRole.DOCTOR,"Img","doctor",
                "one","No14 3r main Vijayanagar","33", Gender.FEMALE,9845088564L,"MBBS",
                "1111122","Oncology","2011","4","Bengaluru", "Forties");
            optional = Optional.of(doctor);
    }

    @AfterEach
    public void tearDown()
    {
        doctorRepository.deleteAll();
        doctor = null;
    }

    @Test
    public void giveDoctorToUpdateAndReturnUpdatedDoctor()
    {
        when(doctorRepository.save(doctor)).thenReturn(doctor);
        doctor.setHospitalLocation("Mysore");
        Doctor updatedDoctor = doctorServiceImpl.updateDoctorProfile(doctor, "d1@gmail.com");
        assertEquals(doctor, updatedDoctor);
    }

    @Test
    public void givenEmailShouldReturnRespectiveUser()
    {
        when(doctorRepository.findById(doctor.getDoctorEmail())).thenReturn(optional);
        Optional<Doctor> optional1 = doctorServiceImpl.findById(doctor.getDoctorEmail());

    }



}
