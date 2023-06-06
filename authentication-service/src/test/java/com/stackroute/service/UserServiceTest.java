package com.stackroute.service;

import com.stackroute.exception.UserNotFoundException;
import com.stackroute.model.User;
import com.stackroute.repo.UserRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import static com.stackroute.model.UserRole.PATIENT;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepo userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private User user;


    @BeforeEach
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        user = new User("nimi@gmail.com","Password",PATIENT);
        Optional optional = Optional.of(user);
    }

    @AfterEach
    public void tearDown(){
        user = null;
    }





    @Test
    public void givenEmailIdAndPasswordToGetUserThenReturnUser() throws UserNotFoundException {
        when(userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword())).thenReturn(user);
        User fetchedUser = userService.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
        assertEquals(user, fetchedUser);

    }

}