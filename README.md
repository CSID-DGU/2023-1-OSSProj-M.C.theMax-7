# 2023-1-OSSProj-M.C.theMax-7
> 2023년 1학기, 오픈소스프로젝트, M.C.theMax, 7조


<br />

## 💭 About
### 1. 프로젝트명
> 동국대학교 통합형 관리 웹서비스 (DonggukPortal)
### 2. 프로젝트 목표
> 동국대학교 메인 페이지, 유드림스, 이클래스 등 학교의 여러 행정 시스템들을 통합한 웹 페이지를 개발하여 학교 구성원들의 편의성을 높이고자 합니다.
### 3. 요구분석
> - DonggukPortal은 동일한 ID와 PW를 공유하지만 <b>분리되어 있는 웹사이트들을 통합</b>한 웹서비스입니다.
> - 이클래스 상에서 과제를 파악하기 번거로운 점을 고려하여 DonggukPortal의 <b>메인 페이지에 칸반보드</b>기능을 추가하여 <b>과제 관리의 효율성을 높입니다.</b>
> - 웹사이트들이 분리되어 개별적인 공지사항을 확인하기가 어려운 점을 감안하여 <b>별도의 공지사항들을 크롤링</b>하여 <b>한 곳에 제공합니다.</b> 더불어 <b>즐겨찾기 기능을 추가하여 원하는 단위의 공지</b>를 알림으로 제공받을 수 있습니다.
> - 교내에서 유드림스 학적을 조회할 때 <b>위변조 위험</b>이 있어 이를 방지하고자 <b>QR code</b>를 삽입하여 성적증명서의 진위를 가릴 수다있습니다.


<br />

## 🔑 Guides
License: [GPL v3.0](License)

Install: [설치방법_한글ver](Start_KO.md)

Execute: [실행방법_한글ver](Execute_KO.md)

Announcdment: [코드설명_한글ver]()

<br />

## ⚙️ System Architecture

- 전체 리소스 가상화


> 이전에 EC2에 서버리소스와 RDS에 DB리소스를 분리하여 서버를 사용하고 있었습니다. 그리고 지금 해당 프로젝트는 전체 리소스를 가상화하여 다음과 같은 인프라 구조를 가지고 있습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/f19730a5-36ec-4dc8-994e-c4f6004c366b" width="70%" height="50%"></p>

<br/>

- 전체 DB구조

> RDBMS는 학교 행정 시스템과 같이 대용량의 데이터를 빠르게 처리하는 종류의 데이터로 데이터간의 관계를 명확히 합니다. 또한 확장성이 높은 관계형 데이터베이스 구조를 위해 MySQL을 사용하였습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/742e19a4-d5d4-4e46-8c87-d75d3258af1c" width="70%" height="50%"></p>

<br/>

- Entity

> <b>데이터베이스</b>의 테이블에 존재하는 column들을 필드로 가지는 객체(entity)를 JPA로 구현하였습니다. <p>
> _데이터베이스에 접근할 때 객체단위로 접근하는데 이떄 데이터베이스의 일관성을 유지하기 위해 데이터베이스를 Entity로 매핑하였습니다._
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/01cb2858-1029-4103-80e6-22efcf6c07bb" width="70%" height="50%"></p>
   
<br/>
   
## 📚 Tech Stack

Common 

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">

Frontend

<img src="https://img.shields.io/badge/react-444444?style=flat-square&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/recoil-f26b00?style=flat-square&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">

Backend

<img src="https://img.shields.io/badge/spring-6DB33F??style=flat-square&logo=spring&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white"/>

Infra

<img src="https://img.shields.io/badge/docker-2496ED??style=flat-square&logo=docker&logoColor=white"/> <img src="https://img.shields.io/badge/amazonaws-232F3E??style=flat-square&logo=amazonaws&logoColor=white"/>

<br />

## 📺 Project Result
#### 👉 메인화면

- <b>로그인 이전 메인화면</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/e66dc824-e383-4c3f-ae4d-5715bf091b87" width="70%" heoght="50%"></p>

- <b>로그인 후 메인화면</b>

DonggukPortal에서 올바른 로그인을 진행하면 자신의 학사정보에 따른 다음과 같은 화면이 나타납니다.<br/>
분리된 사이트들 중에서 원하는 공지사항들을 따로 알림으로 받기위해 '즐겨찾기'기능을 활용할 수 있습니다. 

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/8c1b2f53-3723-4cf1-9549-8df340e911c8" width="70%" height="50%"></p>
   
<br/>
   
#### 👉 메인화면에서 이클래스페이지 

강의실을 선택하세요 부분의 ```<selectbox>```를 클릭하면 각 강의실별 주요사항들(과제,공지사항, 출석부.적성적)을 확인할 수 있습니다.

- <b>과제</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/ff883076-4550-44c3-8cdd-d27b3dfcd938" width="70%" height="50%"></p>

- <b>공지사항</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/762a2fd8-da3a-431a-845e-12c65896b6ad" width="70%" heith="50%"></p>

- <b>출석부</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/5ed3a1ac-bf9d-422a-8570-f3a8c4a4bc4d" width="70%" height="50%"></p>

- <b>성적</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/b5fe212e-d6af-468a-8898-ade031ed6102" width="70%" heith="50%"></p>

<br/>
   
#### 👉 메인화면에서 유드림스페이지

현 uDrims의 전체 UI를 참고하였습니다.

- <b>원스탑  메인페이지</b>
   
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/44c13059-139c-4285-a4ee-82710be981c7" width="0%" height="50%"></p>

- <b>학사정보 페이지</b>
   - <b>학적부 열람</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/cb32c60b-f387-481d-bda7-1a78df9e1447" width="70%" height="50%"></p>

   - <b>개인 강의 시간표 조회</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/dc8706dc-4207-4977-b4a0-c058a3c22ee7" width="70%" height="50%"></p>

   - <b>금학기 성적관리</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/b6af9e0a-107e-4740-8694-cc92dfbacead" width="70%" height="50%"></p>

<br/>
   
## ✨ Expected Outcomes

   - <b>분산되어 있는 학교 시스템을 통합적으로 구현하였습니다.</b>

   유드림스, 이클래스, 학교홈페이지 각각이 모두 분리되어있는 사항에 대해 통합된 포털사이트를 제공합니다. 한 사이트에서 보기좋은 UI로 학교의 모든 웹시스템을 방문하는데 수고로움을 덜었습니다.
   
   - <b>각 학과 전공자들의 관심을 갖는 학교 공지사항들을 한 눈에 확인할 수 있습니다.</b>
   
   원하는 분야의 공지들을 웹페이지별로 크롤링을 진행하여 해당 공지들만을 따로 알림을 통해 제공받을 수 있습니다.
      
   - <b>과제 관리의 효율성을 높였습니다.</b>
   
   과제를 확인하기 위해 이클래스로 들어가지 않고도 DonggukPortal 메인화면에서도 확인할 수 있도록 하였습니다. 완료한 과제와 해야할 과제를 칸반형태로 확인할 수 있습니다.
   
   - <b>성적표 위변조를 방지할 수 있습니다.</b>
   
   교내성적표 조회 및 출력을 위해 따로 교내방문이나 외부기관의 도움없이 DonggukPortal에서 해결할 수 있습니다. 교내 성적표를 pdf로 다운받을 수 있고 추가로 QR 코드를 삽입하여 해당 성적표의 위변조를 방지할 수 있습니다.
   
   </br>
   
## 📍 Commit Convention
|**Type**|설명|
|:--:|:--:|
|**Feat**  | 새로운 기능 추가 작업  |
|**Style** |  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)  |
|**Fix** |  에러 및 버그 수정, 기능에 대한 수정 작업  |
|**Test**  |  테스트 관련 작업  |

<br />

## 🐾 Branch Strategy

<details markdown="1">
<summary>브랜치 종류 소개</summary>

`develop` - default 
- protected → 승인 받아야만 merge 가능

`feature`
- feature/#이슈번호
- feature/#1

</details>

<details markdown="1">
<summary>시나리오</summary>

> 1️⃣ **Issue**
> 1. 이슈생성

> 2️⃣ **Branch**
> - ex. feature/#16

> 3️⃣ **Pull request**
> 1. reviewer → 4명
> 2. 4명 중 2명이 승인(approve)을 해야 merge 가능

> 4️⃣ **Code Review**
> 1. 수정 요청
> 2. 대상자(작업자)가 수정을 하고 다시 커밋을 날림
> 3. 수정 반영하고 답글로 커밋로그 남기기
>    - 수정사항은 커밋번호로 남기기

> 5️⃣ **merge**
> 1. 팀원 호출
> 2. 간단한 리뷰, 피드백, 회의 마친 후
> 3. 다 같이 보는 자리에서 합칠 수 있도록 하기

</details>
<br />

## 🗂 Folder Architecture
### - FE
 **|-- coponents  => 공통 컴포넌트 관리 <br />
   |-- store => 리덕스 관련 모듈들 <br />
   |-- hooks => 공통 hooks 관리 <br />
   |-- pages  => router 페이지 관리 <br />
   |-- utils => util 파일 관리 <br />
   |-- db => mocking data 파일 관리 <br />
   |-- api => api 목록들  <br />
   |-- constants => 상수(매직넘버)  <br />
   |-- assets => 프로젝트에 쓸 font, image 등 <br />**
### - BE
 **|-- models => 데이터 스키마 관리 <br />
   |-- middleware => auth 정보 관리 <br />
   |-- routes => router 관리 <br />**
   
   ## 🤝 Team Member 

| -- | -- | -- | -- |
|:--:|:--:|:--:|:--:|
|**박광렬**|**이지민**|**정관희**|**정원호**|
|**BE**|**FE**|**BE**|**FE**|
|**컴퓨터공학과**|**수학과**|**컴퓨터공학과**|**컴퓨터공학과**|
|**2018112010**|**2020110408**|**2018111997**|**2018112039**|

