# How to Execute DonggukClick

> 본 문서는 local 환경에서의 DonggukClick 실행 방안에 대해 알려드립니다.  
> <b>Windows11</b>을 기준으로 작성되었습니다.
> 
> 최종 수정: 2023.06.13

## Run on local server
  
  백엔드 실행을 먼저 진행해주세요. 도커 환경에서는 서버가 실행하고 있어야 됩니다. 

- Backend

    _다음 중 한가지 방법을 선택하여 진행하시길 바랍니다._
    
    - 로컬 환경 
      
      프로젝트에 포함된 모든 depencies를 ```./gradlew --version``` 로 모두 빌드합니다.

      ```chmod +x gradlew```로 gradlew 파일을 실행할 수 있도록 권한을 부여해줍니다. (Linux)

      ```./gradlew bootJar```로 백엔드 서버 실행 파일 빌드합니다.

      ```cd Backend/mcthemax/build/libs && java -jar mcthemax.jar ``` 로 백엔드 서버를 실행합니다.

    - 도커 환경

      ```docker run -p 8080:80 <이미지 이름>:<이미지 태그>``` (설치 방법에 나와 있는 대로 도커 이미지 빌드를 먼저 진행해주시고, 백엔드 서버가 켜져 있어야 합니다.)

- Frontend

  - 프로젝트에 포함된 모든 depencies를 ```yarn install``` 로 모두 설치합니다.

    _다음 중 한가지 방법을 선택하여 진행하시길 바랍니다._
    
    - 로컬 환경

      - ```yarn start```를 입력하여 서버에 연결합니다.
    
    - 도커 환경

      ```docker run -p 3000:80 <이미지 이름>:<이미지 태그>``` (설치 방법에 나와 있는 대로 도커 이미지 빌드를 먼저 진행해주시고, 백엔드 서버가 켜져 있어야 합니다.)

  -  port 번호를 3000으로 두어 [http://localhost:3000](http://localhost:3000/)에 접속합니다.
