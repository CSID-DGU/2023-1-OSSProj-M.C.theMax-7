package com.mcthemax.domain.response;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Getter
@Setter
public class MapResult<T> extends CommonResult {
    private HashMap<T, T> map;
}
