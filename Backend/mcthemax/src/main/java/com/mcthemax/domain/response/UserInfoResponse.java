package com.mcthemax.domain.response;

import com.mcthemax.domain.user.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserInfoResponse {
    private Long id;
    private UserStatus authority;
    private Boolean authStatus;
}
