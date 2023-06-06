package com.stackroute.Exception;

public class ResourceNotFoundException extends RuntimeException
{
    public ResourceNotFoundException(String str){
        super(str);
    }
}
