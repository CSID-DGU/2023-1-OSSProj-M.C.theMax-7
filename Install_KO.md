# How to start DonggukClick

> 본 문서는 local 환경에서의 DonggukClick 설치 방안에 대해 알려드립니다.  
> <b>Windows11</b>을 기준으로 작성되었습니다.
> 
> 최종 수정: 2023.06.13

<br />

### Docs Map
1. [Get Project File](##1.-get-project-file)
2. [Install Libraries for Frontend](##2.-install-libraries-for-frontend)
3. [Install Dependencies for Backend](##.-install-dependencies-for-backend)

## 1. Get Project File
로컬 환경 Workspace 에 프로젝트 파일을 다운로드합니다. 본 문서에서는 Workspace의 위치를 C:/Example 로 가정합니다.
```
C:\ > cd Example
C:\ > git clone https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7.git
C:\ > cd 2023-1-OSSProj-M.C.theMax-7
```
<br />

## 2. Install Libraries for Frontend
DonggukClick에 사용되는 라이브러리들을 설치합니다.
- react 

  [Node.js](https://nodejs.org/ko) (LTS 버전)으로 npm을 설치한 후 Yarn을 설치합니다. 
  ```
  sudo npm intall -g yarn
  ```
  [next.js](https://nextjs.org/)에서 next.js를 다운받거나 다음과 같이 ``C:/Example/2023-1-OSSProj-M.C.theMax-7/``폴더에 설치합니다.
  ```
  npx create-next-app
  ```

- styled-components

  React 컴포넌트의 스타일링을 위해 CSS-in-JS 라이브러리를 설치합니다.
  
  (yarn을 사용해 라이브러리를 설치하지만 개발환경에 따라 npm으로 설치해도 됩니다.)

  ```yarn add styled-components```

- recoil

  react의 hook와 어울리면서 필요한 요소들의 상태를 관리하기위해 recoil 라이브러리를 설치합니다.
  
  ```yarn add recoil```

- axios

  클라이언트 축에서 서버와의 통신을 처리하기 위해 axios 라이브러리를 설치합니다.
  
  ```yarn add axios```
  
- jspdf
  
  DonggukClick의 성적증명서를 pdf로 변환하기 위해 필요한 jspdf 라이브러리를 설치합니다.
  
  ```yarn add jspdf```

- qrcode.react

  DonggukClick의 성적증명서의 진위를 구분할 QR삽입을 위한 qrcode.react라이브러리를 설치합니다.
  
  ```yarn add qrcode.react```
  
- react-beutiful-dnd

  DonggukClick에서 학생별 과제란을 효율적으로 확인할 수 있도록 react-beautiful-dnd라이브러리를 설치합니다.
  
  ```yarn add react-beautiful-dnd```
  
이외에 모든 라이브러리를 일괄적으로 설치하기 위해서는 ```yarn install```을 입력하면 됩니다.
<br />

## 3. Install Dependencies for Backend

- IDEA 

  ```IntelliJ IDEA```
  
- Spring Boot
  
  java Version : ```JDK 11```

  SpringBoot Version :  ```Spring Boot 2.7.12```

  MySQL Version : ```MySQL 8.0.32```

  - MySQL

  gradle이 프로젝트를 자동으로 관리해주기 때문에 채택하기 때문에 알아서 dependencies가 적용이 됩니다.

  로컬에서 서버와 MySQL과 연결이 되려면  ```Backend/mcthemax/src/main/resources/application.yml```의 2~6번째를 복사한 뒤 주석처리를 하고, 7~8번째 줄의 주석을 풀어주세요.

  ```Backend/mcthemax/src/main/resources/``` 경로에 application-mysql.yml 파일을 생성하고, 앞서 복사한 내용을 붙여 넣은 후 로컬 MySQL의 url, username, password를 기입해주세요.


## 4. Docker image Build Project

도커를 통해 로컬에서 테스트를 진행하는 방법

- Frontend 

  - 프론트엔드 경로로 들어가 Dockerfile을 빌드 합니다. (ENV REACT_APP_SERVER_URL= 실행중인 서버 URL)

  ```cd Frontend/mcthemax && docker image build --tag:<이름>:<버전> . ```
  
  - 빌드된 도커 이미지를 확인합니다.

  ```docker images ```


- Backend
  
  - Spring 프로젝트 경로 Backend/

  ```cd Backend/mcthemax && docker image build --tag:<이름>:<버전> . ```

  - 빌드된 도커 이미지를 확인합니다.

  ```docker images ```

이외에 종속성 관리도구를 설치하기 위해서는 ```npm install``` ```node server``` 를 입력하면 됩니다.
