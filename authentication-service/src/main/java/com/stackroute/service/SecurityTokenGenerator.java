package com.stackroute.service;

import com.stackroute.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    Map<String,String> generateToken(User user);
}