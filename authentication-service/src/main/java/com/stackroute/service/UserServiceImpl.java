package com.stackroute.service;

import com.stackroute.exception.UserNotFoundException;
import com.stackroute.model.User;

import com.stackroute.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepository;

    @Autowired
    public UserServiceImpl(UserRepo userRepository){
        this.userRepository = userRepository;

    }
    //This method updates the user details.
    @Override
    public void saveUser(User user) {
         userRepository.save(user);
    }

    //This is implemetation method of finding user by email id and password
    @Override
    public User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException {
        User user =  userRepository.findByEmailIdAndPassword(emailId , password);
        if(user == null){
            throw new UserNotFoundException();
        }
        return user;
    }

}
