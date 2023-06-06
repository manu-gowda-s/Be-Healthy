package com.stackroute.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Document(collection = "patientProfile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Patient
{
    @Id
    @Email
    @NotNull
    private String patientEmail;
    @NotNull
    private String patientPassword;
    private UserRole userRole;

    private String patientImage;
    private String firstName;
    private String lastName;
    private String age;
    private Long contactNum;
    private BloodGroup bloodGroup;
    private Gender gender;
    private String weight;
    private String height;



}
