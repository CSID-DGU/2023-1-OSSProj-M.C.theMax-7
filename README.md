# 2023-1-OSSProj-M.C.theMax-7
> 2023년 1학기, 오픈소스프로젝트, M.C.theMax, 7조


<br />

## 💭 About
### 1. 프로젝트명
> 동국대학교 통합형 관리 웹서비스 (DonggukClick)
### 2. 프로젝트 목표
> 동국대학교 메인 페이지, 유드림스, 이클래스 등 학교의 여러 행정 시스템들을 통합한 웹 페이지를 개발하여 학교 구성원들의 편의성을 높이고자 합니다.
### 3. 요구분석
> 현재 동국대학교 시스템은 필요한 웹사이트들이 모두 <b>분리되어 있어</b> 이를 통합시킬 필요성이 있습니다.<br/>
> 
> <b>이클래스 상에서 과제</b>를 파악하려면 [강의실] 에 들어가 [과제] 페이지로 접속해야 하는 등의 <b>번거로움</b>이 있습니다.<br/>
> 
> 분리된 웹사이트들에서 <b>공지사항들이 모두 달라</b> 중요 정보들을 <b>한번에</b> 찾아내기가 어렵습니다.<br/>
> 
> 교내에서 성적증명서를 <b>인쇄</b>하려면 <b>학교를 직접 방문하거나 외부 기관의 도움</b>이 필요해 pdf로 변환하는 서비스가 필요합니다.<br/>
> 
> 교내 성적증명서를 <b>조회</b>할때 <b>식별코드가 없어 위변조의 위험</b>이 있습니다.

<br />

## 🔑 Guides
License: [Apache v2.0](License)

Install: [설치방법_한글ver](Install_KO.md)

Execute: [실행방법_한글ver](Execute_KO.md)

Announcement: [코드설명_한글ver](Announcement_KO.md)

<br />

## ⚙️ System Architecture

- 전체 리소스 가상화


> 이전에 EC2에 서버리소스와 RDS에 DB리소스를 분리하여 서버를 사용하고 있었습니다. 그리고 지금 해당 프로젝트는 전체 리소스를 가상화하여 다음과 같은 인프라 구조를 가지고 있습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/9c70186a-ecb3-4c1f-a3ee-dde29a92f6f9" width="70%" height="50%"></p>
<br/>
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/73997c96-cadc-40d2-89a7-d99bfb2f67d8" width="70%" height="50%"></p>


<br/>

- 전체 DB구조

> RDBMS는 학교 행정 시스템과 같이 대용량의 데이터를 빠르게 처리하는 종류의 데이터로 데이터간의 관계를 명확히 합니다. 또한 확장성이 높은 관계형 데이터베이스 구조를 위해 MySQL을 사용하였습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/742e19a4-d5d4-4e46-8c87-d75d3258af1c" width="70%" height="50%"></p>

<br/>

- Entity

> <b>데이터베이스</b>의 테이블에 존재하는 column들을 필드로 가지는 객체(entity)를 JPA로 구현하였습니다. <p>
> _데이터베이스에 접근할 때 객체단위로 접근하는데 이 데이터베이스의 일관성을 유지하기 위해 데이터베이스를 Entity로 매핑하였습니다._
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/01cb2858-1029-4103-80e6-22efcf6c07bb" width="70%" height="50%"></p>
   
<br/>
   
## 📚 Tech Stack

<b>Common</b>

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">

<b>Frontend</b>

<img src="https://img.shields.io/badge/react-444444?style=flat-square&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/recoil-f26b00?style=flat-square&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">

<b>Backend</b>

<img src="https://img.shields.io/badge/spring-6DB33F??style=flat-square&logo=spring&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white"/>

<b>Infra</b>

<img src="https://img.shields.io/badge/docker-2496ED??style=flat-square&logo=docker&logoColor=white"/> <img src="https://img.shields.io/badge/amazonaws-232F3E??style=flat-square&logo=amazonaws&logoColor=white"/>

<br />

## 📺 Project Result
#### 👉 메인화면

- <b>로그인 이전 메인화면</b>

학생/ 교수/ 교직원 여부에 따라 로그인 컴포넌트가 달라집니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/02be4118-9ed9-4d2e-ac22-5e8a7391890a" width="300" height="500"> <img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/bc09420d-de1f-4fb9-99c2-7e92f489e3f1" width="300" height="500"> </p>

- <b>로그인 후 메인화면</b>

DonggukClick에서 올바른 로그인을 진행하면 자신의 학사정보에 따른 다음과 같은 화면이 나타납니다.<br/>
분리된 사이트들 중에서 원하는 공지사항들을 따로 알림으로 받기위해 '즐겨찾기'기능을 활용할 수 있습니다. <br/>
이클래스에서만 확인가능한 과제의 제출여부와 과제사항들을 DonggukClick 메인페이지에서 확인할 수 있습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/8e7f315f-3d20-4d17-8339-165e7a1fc1d2" width="70%" height="50%"></p>

왼쪽 상단에서 즐겨찾기기능을 활용하면 관심분야의 공지들만을 따로 확인할 수 있습니다.

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/72fcd701-618f-4a2e-8fd3-c60dc6e43829" width="300" height="500"></p>
   
#### 👉 메인화면에서 이클래스페이지 

- <b>메인</b>

DonggukClick에서 로그인된 상태로 이클래스페이지에 들어오게 되면 '강의실을 선택하세요' 부분의 ```<selectbox>```를 클릭하여 각 강의실별 주요사항들(과제,공지사항, 출석부.성적)을 확인할 수 있습니다.
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/bb628892-4cf6-45ae-81e3-f63c76e9ea89" width="70%" height="50%"></p>

- <b>과제</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/a7d0988b-ed90-48a1-9f76-48b66fa34c5b" width="70%" height="50%"></p>

- <b>공지사항</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/c5c599ad-645d-4ca4-820c-f3005c6d2ddc" width="70%" heith="50%"></p>

- <b>출석부</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/1939be54-4e21-4194-8513-3ddb1f756220" width="70%" height="50%"></p>

- <b>성적</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/ace24018-977f-4366-9ddb-50846264014a" width="70%" height="50%"></p>


#### 👉 메인화면에서 유드림스페이지

현 uDrims의 전체 UI를 참고하였습니다.

- <b>원스탑  메인페이지</b>
   
<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/7209d8bf-1313-4503-9798-420042320ead" width="70%" height="50%"></p>

- <b>학사정보 페이지</b>
   - <b>학적부 열람</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/4cba1f2a-58f1-45e8-a3e9-907670b72d5d" width="70%" height="50%"></p>

   - <b>개인 강의 시간표 조회</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/78cbf6a1-79fc-4b7a-aee3-c6e02e81e620" width="70%" height="50%"></p>

   - <b>금학기 성적관리</b>

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/7abbff00-4fab-465f-8b96-8b2d0cace0d9" width="70%" height="50%"></p>

#### 👉 메인화면에서 성적조회

- <b>성적조회 페이지</b>

미리보기로 성적증명서를 먼저 확인하고 PDF로 저장할 수 있습니다.<br/>
추가로 QR코드를 삽입하여 위변조되지 않은 교내성적표임을 보장할 수 있습니다. 

<p align="center"><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/4e3d8b55-d695-4df7-98f5-6462678c1488" width="350" height="400"> <img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/d73eef8c-9bb2-40ed-885e-0502ea81d8ed" width="400" height="400"></p>

<br/>

## ✨ Expected Outcomes

   - <b>분산되어 있는 학교 시스템을 통합적으로 구현하였습니다.</b>

   유드림스, 이클래스, 학교홈페이지 각각이 모두 분리되어있는 사항에 대해 통합된 포털사이트를 제공합니다. 한 사이트에서 보기좋은 UI로 학교의 모든 웹시스템을 방문하는데 수고로움을 덜었습니다.
   
   - <b>각 학과 전공자들의 관심을 갖는 학교 공지사항들을 한 눈에 확인할 수 있습니다.</b>
   
   원하는 분야의 공지들을 웹페이지별로 크롤링을 진행하여 해당 공지들만을 따로 알림을 통해 제공받을 수 있습니다.
      
   - <b>과제 관리의 효율성을 높였습니다.</b>
   
   과제를 확인하기 위해 이클래스로 들어가지 않고도 DonggukClick 메인화면에서도 확인할 수 있도록 하였습니다. 완료한 과제와 해야할 과제를 칸반형태로 확인할 수 있습니다.
   
   - <b>성적표 위변조를 방지할 수 있습니다.</b>
   
   교내성적표 조회 및 출력을 위해 따로 교내방문이나 외부기관의 도움없이 DonggukClick에서 해결할 수 있습니다. 교내 성적표를 pdf로 다운받을 수 있고 추가로 QR 코드를 삽입하여 해당 성적표의 위변조를 방지할 수 있습니다.
   
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
   
   ## ✍️ Reference
   
   <b>과제 관리 </b><br/> 
   [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
   
   <b>성적증명 PDF</b><br/>
   [jsPDF](https://github.com/parallax/jsPDF)
   [html2canvas](https://github.com/atlassian/react-beautiful-dnd)
   
   <b>성적증명서 QR코드</b><br/>
   [QRcode react](https://github.com/zpao/qrcode.react)
   
   <b>리액트 테이블</b><br/>
   [React table](https://github.com/react-component/table.git)
   
   ## 🤝 Team Member 

| -- | -- | -- | -- |
|:--:|:--:|:--:|:--:|
|**박광렬**|**이지민**|**정관희**|**정원호**|
|**BE**|**FE**|**BE**|**FE**|
|**컴퓨터공학과**|**수학과**|**컴퓨터공학과**|**컴퓨터공학과**|
|**2018112010**|**2020110408**|**2018111997**|**2018112039**|

