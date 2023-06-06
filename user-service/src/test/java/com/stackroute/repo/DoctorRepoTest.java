package com.stackroute.repo;

import com.stackroute.model.Doctor;
import com.stackroute.model.Gender;
import com.stackroute.model.UserRole;
import com.stackroute.repositories.DoctorRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class DoctorRepoTest
{

    @Autowired
    private DoctorRepository doctorRepository;
    private Doctor doctor;

    @BeforeEach
    void setUp()
    {
        doctor = new Doctor();
        doctor.setDoctorEmail("mg@gmail.com");
        doctor.setDoctorPassword("t@123");
        doctor.setUserRole(UserRole.DOCTOR);
        doctor.setDoctorImage("IMg");
        doctor.setFirstName("Tannu");
        doctor.setLastName("Gowda");
        doctor.setAddress("12, 2nd cross Jayanagar");
        doctor.setAge("24");
        doctor.setGender(Gender.FEMALE);
        doctor.setContactNo(9855554444L);
        doctor.setGraduation("MBBS");
        doctor.setMrn("7787727278");
        doctor.setSpecialization("Orthopedic");
        doctor.setYoe("3");
        doctor.setHospitalLocation("Bengaluru");
        doctor.setHospitalName("Forties");
    }

    @AfterEach
    void tearDown()
    {
        doctorRepository.deleteAll();
        doctor=null;

    }

    @Test
    public void toSaveDoctorAndReturnSavedDoctor()
    {
        doctorRepository.save(doctor);
        Doctor doctor1 = doctorRepository.findById(doctor.getDoctorEmail()).get();
        assertEquals("mg@gmail.com", doctor1.getDoctorEmail());
    }

    @Test
    public void giveEmailShouldReturnRespectiveDoctor()
    {
        Doctor doctor = new Doctor("d1@gmail.com","2344",UserRole.DOCTOR,"Img","doctor",
                "one","No14 3r main Vijayanagar","33",Gender.FEMALE,9845088564L,"MBBS",
                "777777","Oncology","2011","4","Bengaluru", "Forties");

        Doctor doctor1 = doctorRepository.save(doctor);
        Optional<Doctor> doctor2 = doctorRepository.findById(doctor1.getDoctorEmail());

        assertEquals(doctor1.getDoctorPassword(),doctor2.get().getDoctorPassword());
        assertEquals(doctor1.getUserRole(),doctor2.get().getUserRole());
        assertEquals(doctor1.getDoctorImage(),doctor2.get().getDoctorImage());
        assertEquals(doctor1.getFirstName(),doctor2.get().getFirstName());
        assertEquals(doctor1.getLastName(),doctor2.get().getLastName());
        assertEquals(doctor1.getAddress(),doctor2.get().getAddress());
        assertEquals(doctor1.getAge(),doctor2.get().getAge());
        assertEquals(doctor1.getGender(),doctor2.get().getGender());
        assertEquals(doctor1.getContactNo(),doctor2.get().getContactNo());
        assertEquals(doctor1.getGraduation(),doctor2.get().getGraduation());
        assertEquals(doctor1.getMrn(),doctor2.get().getMrn());
        assertEquals(doctor1.getSpecialization(),doctor2.get().getSpecialization());
        assertEquals(doctor1.getYearOfRegistration(),doctor2.get().getYearOfRegistration());
        assertEquals(doctor1.getYoe(),doctor2.get().getYoe());
        assertEquals(doctor1.getHospitalLocation(),doctor2.get().getHospitalLocation());
        assertEquals(doctor1.getHospitalName(),doctor2.get().getHospitalName());

    }







}
