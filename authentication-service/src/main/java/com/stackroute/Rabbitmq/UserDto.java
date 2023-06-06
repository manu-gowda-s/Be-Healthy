package com.stackroute.Rabbitmq;

import com.stackroute.model.UserRole;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto
{
    private String emailId;
    private String password;
    private UserRole userRole;

}
