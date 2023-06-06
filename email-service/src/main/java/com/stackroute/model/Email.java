package com.stackroute.model;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Email{

    // data members for email-service

    private String to;

    private String subject;

    private String message;

    // private String attachment;

}
