package com.stackroute.appointmentService.exception;



public class CustomisedExceptions extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public CustomisedExceptions(String exp) {
        super(exp);
    }
}
