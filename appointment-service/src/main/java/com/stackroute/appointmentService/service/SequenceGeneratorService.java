package com.stackroute.appointmentService.service;


import com.stackroute.appointmentService.model.DbSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.query.Criteria.where;

@Service
public class SequenceGeneratorService {

    @Autowired
    private MongoOperations mongoOperations;


    public int getSequenceNumber(String sequenceName){

        DbSequence counter = mongoOperations.findAndModify(Query.query(where("id").is(sequenceName)
        ), new Update().inc("seq",1), FindAndModifyOptions.options().returnNew(true).upsert(true), DbSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;


    }

}
