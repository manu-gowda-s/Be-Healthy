package com.stackroute.appointmentService.service;


import com.stackroute.appointmentService.model.AppointmentDbSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.query.Criteria.where;

@Service
public class AppointmentSequenceGeneratorService {

    @Autowired
    private MongoOperations mongoOperations;


    public int getSequence(String Sequence_Name){

        AppointmentDbSequence counter = mongoOperations.findAndModify(Query.query(where("idNor").is(Sequence_Name)
        ), new Update().inc("sequence",1), FindAndModifyOptions.options().returnNew(true).upsert(true), AppointmentDbSequence.class);
        return !Objects.isNull(counter) ? counter.getSequence(): 1;


    }

}
