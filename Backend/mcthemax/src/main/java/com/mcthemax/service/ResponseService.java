package com.mcthemax.service;

import com.mcthemax.domain.response.CommonResult;
import com.mcthemax.domain.response.ListResult;
import com.mcthemax.domain.response.MapResult;
import com.mcthemax.domain.response.SingleResult;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class ResponseService {

    public <T> SingleResult<T> getSingleResult(T data, int code, String msg) {
        SingleResult<T> result = new SingleResult<>();
        result.setData(data);
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }

    public <T> ListResult<T> getListResult(List<T> list, int code, String msg) {
        ListResult<T> result = new ListResult<>();
        result.setList(list);
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }

    public <T> MapResult<T> getMapResult(HashMap<String, Object> map, int code, String msg) {
        MapResult<T> result = new MapResult<>();
        result.setMap((HashMap<T, T>) map);
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }
    public CommonResult getCommonResult(int code, String msg) {
        CommonResult result = new CommonResult();
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }
}
