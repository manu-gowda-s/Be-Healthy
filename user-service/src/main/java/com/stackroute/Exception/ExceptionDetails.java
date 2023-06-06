package com.stackroute.Exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

@Getter
@AllArgsConstructor
public class ExceptionDetails
{
    private Date timeStamp;
    private String message;
    private String details;


}
