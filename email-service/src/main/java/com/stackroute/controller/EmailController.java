package com.stackroute.controller;

import com.stackroute.model.Email;
import com.stackroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/email")

public class EmailController {

    @Autowired
    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }



    // method to send-email
    @PostMapping("/email/sendemail")
    public String sendEmail(@RequestBody Email email){

        String status = emailService.sendEmail(email);
        return status;
    }

}
