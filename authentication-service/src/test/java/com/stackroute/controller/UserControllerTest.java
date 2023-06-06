package com.stackroute.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.model.User;
import com.stackroute.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static com.stackroute.model.UserRole.PATIENT;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;


@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private UserService userService;
    private User user;


    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp(){
        user =  new User("nimi@gmail.com","Password",PATIENT);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }



    @Test
    public void givenEmailToFindByEmailThenShouldReturnUser() throws Exception{
        userService.saveUser(user);
        when(userService.findByEmailIdAndPassword(user.getEmailId(), user.getPassword())).thenReturn(user);
        mockMvc.perform(post("/api/v1/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isOk());
        verify(userService, times(1)).findByEmailIdAndPassword(any(),any());   }


    public static String asJsonString(final Object obj){
        try{
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
