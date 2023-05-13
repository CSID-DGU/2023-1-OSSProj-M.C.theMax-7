package com.mcthemax.service;

import com.mcthemax.domain.user.User;
import com.mcthemax.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // signup
    public Long save(User user) {
        userRepository.save(user);
        return user.getId();
    }

    public Optional<User> findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }
}
