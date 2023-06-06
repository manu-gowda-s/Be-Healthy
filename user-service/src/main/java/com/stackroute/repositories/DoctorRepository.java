package com.stackroute.repositories;

import com.stackroute.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String>
{
    List<Doctor> findBySpecialization(String specialization);

    List<Doctor> findByHospitalLocation(String hospitalLocation);
}
