package com.stackroute.rabbitMq;

import com.stackroute.model.UserRole;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDto
{
    private String emailId;
    private String password;
    private UserRole userRole;

}
