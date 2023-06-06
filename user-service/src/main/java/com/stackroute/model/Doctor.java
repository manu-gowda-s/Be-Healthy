package com.stackroute.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Document(collection = "doctorProfile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Doctor
{

    @Id
    @Email
    @NotNull
    private String doctorEmail;
    @NotNull
    private String doctorPassword;
    private UserRole userRole;

    private String doctorImage;
    private String firstName;
    private String lastName;
    private String address;
    private String age;
    private Gender gender;
    private Long contactNo;
    private String graduation;
    private String mrn;
    private String specialization;
    private String yearOfRegistration;
    private String yoe;
    private String hospitalLocation;
    private String hospitalName;



}
