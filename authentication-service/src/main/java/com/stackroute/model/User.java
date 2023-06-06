package com.stackroute.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class User {
    @Id
    private String emailId;
    private String password;
    private UserRole userRole;


}
