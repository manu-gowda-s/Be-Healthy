package com.stackroute.service;

import com.stackroute.exception.UserNotFoundException;
import com.stackroute.model.User;

public interface UserService {
    void saveUser(User user);
    User findByEmailIdAndPassword(String emailId , String password) throws UserNotFoundException;

}
