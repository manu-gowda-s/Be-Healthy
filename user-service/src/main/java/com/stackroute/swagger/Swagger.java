package com.stackroute.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger
{
    @Bean
    public Docket api()
    {
        return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.any())
                .apis(RequestHandlerSelectors.basePackage("com.stackroute.controller")).build()
                .apiInfo(metaData());
    }

    public ApiInfo metaData()
    {
        return new ApiInfoBuilder()
                .title("User Service - This is a Spring Boot Swagger Configuration")
                .description("This is a spring boot application for a Doctor and Patient Services")
                .build();
    }

}
