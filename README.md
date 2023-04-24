# 2023-1-OSSProj-M.C.theMax-7

> 동국대학교 웹페이지 통합 시스템 개발

<br />

## 💭 About

> 동국대학교 메인 페이지, 유드림스, 이클래스를 통합한 웹 페이지


## Team Member 

| -- | -- | -- | -- |
|:--:|:--:|:--:|:--:|
|**박광렬**|**이지민**|**정관희**|**정원호**|
|**BE**|**FE**|**BE**|**FE**|


<br />

## 📚 Tech Stack
- **React**
- **Recoil**
- **styled-components**
- **Spring**


<br />


## 📍 Commit Convention
|**Type**|설명|
|:--:|:--:|
|**Docs** |  문서 작성 및 수정 작업(README 등)  |
|**Add**  |  기능이 아닌 것 생성 및 추가 작업(파일·익스텐션·프로토콜 등)  |
|**Feat**  | 새로운 기능 추가 작업  |
|**Style** |  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)  |
|**Fix** |  에러 및 버그 수정, 기능에 대한 수정 작업  |
|**Edit** |  Fix가 아닌 모든 수정 작업(주석, 파일 및 폴더 위치, 코드 스타일 등)  |
|**Del**   | 파일, 에셋 등 삭제 작업  |
|**Set**   | 세팅 관련 작업  |
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

