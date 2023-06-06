package com.stackroute.controller;

import com.stackroute.exception.UserNotFoundException;
import com.stackroute.model.User;
import com.stackroute.service.SecurityTokenGenerator;
import com.stackroute.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    private ResponseEntity responseEntity;
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    //This is User controller class

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    //This is login for mapping for user using which user can login using the credentials
    @PostMapping("/auth/login")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotFoundException
    {
        Map<String, String> map = null;
        try {
            User userObj = userService.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
            if (userObj.getEmailId().equals(user.getEmailId()) && userObj.getPassword().equals(user.getPassword())) {
                map = securityTokenGenerator.generateToken(user);
                map.put("userRole", userObj.getUserRole().name());
                map.put("emailId", userObj.getEmailId());

            }
            responseEntity = new ResponseEntity(map, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException();
        } catch (Exception e) {
            responseEntity = new ResponseEntity("Try after sometime!!!", HttpStatus.OK);
        }
        return responseEntity;
    }
}
