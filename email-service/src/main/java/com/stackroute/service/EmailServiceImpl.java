package com.stackroute.service;

import com.stackroute.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender){
        this.javaMailSender=javaMailSender;
    }


    public String sendEmail(Email email) {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper;

        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setTo(email.getTo());
            mimeMessageHelper.setSubject("Be Healthy Appointment Booking Details");
            mimeMessageHelper.setText(email.getMessage());


            javaMailSender.send(mimeMessage);

            return "Mail Sent Successfully...";

        }

        catch (MessagingException e) {

            return "Error while sending mail!!!";

        }
    }
}




