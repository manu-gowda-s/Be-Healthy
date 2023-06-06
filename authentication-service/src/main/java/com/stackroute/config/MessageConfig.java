package com.stackroute.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.Queue;

@Configuration
public class MessageConfig
{
    public static final String QUEUE = "auth_queue";
    public static final String EXCHANGE = "Credentials_exchange";
    public static final String ROUTING_KEY = "Credentials_routingKey";

    @Bean
    public Queue queue() {
        return new Queue(QUEUE, false);
        }

    @Bean
    public DirectExchange exchange()
    {
        return new DirectExchange(EXCHANGE);
    }

    @Bean
    public Binding binding(Queue queue, DirectExchange exchange)
    {
        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with(ROUTING_KEY);
    }
    @Bean
    public Jackson2JsonMessageConverter converter()
    {
        return new Jackson2JsonMessageConverter();
    }


}
