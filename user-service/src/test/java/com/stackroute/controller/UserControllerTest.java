package com.stackroute.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.model.Doctor;
import com.stackroute.model.Gender;
import com.stackroute.model.UserRole;
import com.stackroute.services.DoctorService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest
{
    @Autowired
    private MockMvc mockMvc;

    @Mock
    private DoctorService doctorService;
    private Doctor doctor;
    private List<Doctor> doctorList;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp()
    {
        doctor = new Doctor("d1@gmail.com","2344", UserRole.DOCTOR,"Img","doctor",
                "one","No14 3r main Vijayanagar","33", Gender.FEMALE,9845088564L,"MBBS",
                "1111122","Oncology","2011","4","Bengaluru", "Forties");

       mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @Test
    public void toSaveDoctorAndReturnSavedDoctor() throws Exception
    {
        when(doctorService.createDoctorProfile(any())).thenReturn(doctor);
        mockMvc.perform(post("/api/v1/doctor").contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(doctor))).andExpect(status().isCreated());
    }

    public static String asJsonString(final Object o)
    {
        try {
            return new ObjectMapper().writeValueAsString(o);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }


}
