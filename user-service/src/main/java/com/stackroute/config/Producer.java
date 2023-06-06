package com.stackroute.config;

import com.stackroute.rabbitMq.UserDto;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer
{
    private RabbitTemplate rabbitTemplate;
    private DirectExchange exchange;

    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange exchange){
        super();
        this.rabbitTemplate=rabbitTemplate;
        this.exchange=exchange;
    }

    public void sendMessageToConsumer(UserDto userDto)
    {
        rabbitTemplate.convertAndSend(exchange.getName(),"Credentials_routingKey",userDto);
    }
}
