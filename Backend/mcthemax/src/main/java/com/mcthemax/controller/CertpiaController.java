package com.mcthemax.controller;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.mcthemax.domain.lecture.CurrentLectureDTO;
import com.mcthemax.domain.response.MapResult;
import com.mcthemax.domain.user.Student;
import com.mcthemax.domain.user.User;
import com.mcthemax.service.ResponseService;
import com.mcthemax.service.StudentLectureService;
import com.mcthemax.service.StudentService;
import com.mcthemax.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CertpiaController {

    private final UserService userService;
    private final StudentService studentService;
    private final ResponseService responseService;
    private final StudentLectureService studentLectureService;

    @GetMapping("/certpia")
    public MapResult getCertpia() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();

        Optional<User> user = userService.findByUsername(id);
        Student student = studentService.findByUser(user);

        HashMap<String, Object> resultMap = new HashMap<>();
        resultMap.put("name", user.get().getName());
        resultMap.put("code", user.get().getId());
        resultMap.put("grade", student.getGrade());
        resultMap.put("department", student.getDepartment().getName());

        List<CurrentLectureDTO> lectures = studentLectureService.GetCurrentCourse(student.getId());
        resultMap.put("lectures", lectures);

        return responseService.getMapResult(resultMap, 200, "ddong");
    }

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @PostMapping("certpia/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file")MultipartFile file) {
        try {
            String fileName = file.getOriginalFilename();
            String fileUrl = "https://" + bucket + "/test" + fileName;
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(file.getContentType());
            metadata.setContentLength(file.getSize());
            amazonS3Client.putObject(bucket, fileName, file.getInputStream(), metadata);
            return ResponseEntity.ok(fileUrl);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
