# 빌드 단계 (Builder 이미지)
FROM openjdk:11 AS builder

# 작업 디렉토리 설정
WORKDIR .

# Gradle 래퍼 파일 복사
COPY gradlew .
COPY gradle gradle

# Gradle 권한 부여 
RUN chmod +x gradlew

# Gradle 의존성 다운로드
RUN ./gradlew --version

# 프로젝트 설정 파일 복사
COPY build.gradle .
COPY settings.gradle .
# COPY gradle.properties .

# 소스 코드 복사
COPY src src
# 애플리케이션 빌드
RUN ./gradlew build

# 실행 단계 (실행 이미지)
FROM openjdk:11

# 애플리케이션 JAR 파일 복사
COPY --from=builder build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

# 애플리케이션 실행을 위한 커맨드 설정
EXPOSE 8080

CMD ["java","-jar","app.jar"]