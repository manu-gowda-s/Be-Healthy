package com.stackroute.appointmentService.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfig
{

    public static final String EXCHANGE = "AppointmentDetails_exchange";
    public static final String ROUTING_KEY = "AppointmentDetails_routingKey";



    @Bean
    public DirectExchange exchange()
    {

        return new DirectExchange(EXCHANGE);
    }




    @Bean
    public Jackson2JsonMessageConverter converter()
    {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate template(ConnectionFactory connectionFactory)
    {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(converter());
        return template;
    }
}