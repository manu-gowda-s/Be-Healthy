package com.stackroute.repository;

import com.stackroute.appointmentService.model.Timeslot;
import com.stackroute.appointmentService.repository.TimeslotRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@DataMongoTest
@ExtendWith(MockitoExtension.class)
public class TimeslotRepositoryTest {

    @Mock
    private TimeslotRepository timeslotRepository;


    Timeslot slot1,slot2 ;

    List<Timeslot> list;

    @BeforeEach
    public void setUp(){
        slot1= new Timeslot(1,"saraswati@gmail.com", LocalDate.now(), LocalTime.now(), LocalTime.now().plusHours(2).plusMinutes(0),true);

        slot2= new Timeslot(2,"vinayak@gmail.com", LocalDate.now(), LocalTime.now(), LocalTime.now().plusHours(2).plusMinutes(0),true);

        list = new ArrayList<>();
        list.add(slot1);
        list.add(slot2);

    }


    @AfterEach
    public void tearDown(){
        slot1=null;
        slot2= null;
        list = null;

    }


    @Test
    public void findBySlotDateAndDoctorEmailTest(){
        String doctorEmail ="saraswati@gmail.com";
        LocalDate slotDate = LocalDate.now();

        List<Timeslot> timeslotlist = List.of(slot1);

       System.out.println("Timeslot test");

        when(timeslotRepository.findBySlotDateAndDoctorEmail(slotDate,doctorEmail)).thenReturn(timeslotlist);

        assertEquals(doctorEmail,timeslotRepository.findBySlotDateAndDoctorEmail(slotDate,doctorEmail).get(0).getDoctorEmail());


        assertEquals(slotDate,timeslotRepository.findBySlotDateAndDoctorEmail(slotDate,doctorEmail).get(0).getSlotDate());



    }

}
