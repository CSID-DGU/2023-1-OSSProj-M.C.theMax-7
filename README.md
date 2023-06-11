# 2023-1-OSSProj-M.C.theMax-7
> 2023년 1학기, 오픈소스프로젝트, M.C.theMax, 7조


<br />

## 💭 About
### 1. 프로젝트명
> 동국대학교 통합형 관리 웹서비스 (DonggukPortal)
### 2. 프로젝트 목표
> 동국대학교 메인 페이지, 유드림스, 이클래스 등 학교의 여러 행정 시스템들을 통합한 웹 페이지를 개발하여 학교 구성원들의 편의성을 높이고자 한다.
### 3. 요구분석
> - DonggukPortal은 동일한 ID와 PW를 공유하지만 <b>분리되어 있는 웹사이트들을 통합</b>한 웹서비스이다.
> - 이클래스 상에서 과제를 파악하기 번거로운 점을 고려하여 DonggukPortal의 <b>메인 페이지에 칸반보드</b>기능을 추가하여 <b>과제 관리의 효율성을 높인다.</b>
> - 웹사이트들이 분리되어 개별적인 공지사항을 확인하기가 어려운 점을 감안하여 <b>별도의 공지사항들을 크롤링</b>하여 <b>한 곳에 제공한다.</b> 더불어 <b>즐겨찾기 기능을 추가하여 원하는 단위의 공지</b>를 알림으로 제공받을 수 있다.
> - 교내에서 유드림스 학적을 조회할 때 <b>위변조 위험</b>이 있어 이를 방지하고자 <b>QR code</b>를 삽입하여 성적증명서의 진위를 가린다.


<br />

## 🔑 Guides
License: [GPL v3.0](License)

Install: [설치 방법](Start_KO.md)

Execute: [실행 방법](Execute_KO.md)

<br />

## ⚙️ System Architecture

------작성중--------

- 전체 리소스 가상화

<center><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/f19730a5-36ec-4dc8-994e-c4f6004c366b" width="70%" height="50%"></center>

- 전체 DB구조

<center><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/742e19a4-d5d4-4e46-8c87-d75d3258af1c" width="70%" height="50%"></center>

- Entity

<center><img src="https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/01cb2858-1029-4103-80e6-22efcf6c07bb" width="70%" height="50%"></center>

## 📚 Tech Stack

Common 

![Visaul Studio Code](https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint)
![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier)

Frontend

![React](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react)
![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=recoil)
![Styled-Components](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents)

Backend

![Spring](https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql)

Infra

![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker)
![AWS EC2](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws)

<br />

## 📺 Project Result

로그인 후 메인화면
![image](https://github.com/CSID-DGU/2023-1-OSSProj-M.C.theMax-7/assets/96400257/3da3c42c-f84c-473a-bf03-96b68abf62f5)


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
 **|-- comonents  => 공통 컴포넌트 관리 <br />
   |-- store => 리덕스 관련 모듈들 <br />
   |-- hooks => 공통 hooks 관리 <br />
   |-- pages  => router 페이지 관리 <br />
   |-- utils => util 파일 관리 <br />
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

