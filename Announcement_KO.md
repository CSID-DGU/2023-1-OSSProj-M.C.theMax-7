# Learn about DonggukClick code

> 본 문서는 local 환경에서의 DonggukClick 주요 기능 코드에 대해 알려드립니다. <br/>
> Windows11을 기준으로 작성되었습니다. 
> 
> 최종 수정: 2023.06.13

  <br/>

### 🧑‍💻 메인페이지 로그인 컴포넌트

  - 학생, 교수, 교직원 구분을 위해 ```radio button``` 이용
  - 로그인 버튼 클릭시 서버에 id, pwd, authority와 함께 POST 통신
  - formik 라이브러리로 통신을 하고 form에 value 저장
  - 로그인 성공 시 reoil state를 true로 변경하고 백엔드 측에서 response로 주는 학생 정보를 localStorage에 저장
   ```
    LoginApi(data).then((res) => {
      console.log(res);
      if (res.status === 200) {
          window.localStorage.setItem("AUTH-TOKEN", res.data.id);
          setIsLoggedIn(true);
        }
    });
   ```
 <br/>
 
### 🧑‍💻 메인페이지 <내 할일 보기>

  - react-beutiful-dnd 라이브러리를 설치
  - dnd 라이브러리에서 ```{droppable}```과 ```{draggable}```함수 import
  
    > DragDropContent: 전체 어플리케이션을 감싸는 wrapper <br/>
    > Droppable: drop 액션을 취할때 ```onDragEnd={...}``` 함수가 동작하면서 drop할 수 있는 wrapper <br/>
    > Draggable: drag하는 주체로 drag가 가능한 컴포넌트를 모두 감싸는 wrapper <br/>
  - drag, drop 동작시 dom 이벤트에 대해 style을 적용하기 위해 ```snapshot```인수 활용
   ```
      {(provided, snapshot) => (
            <Contatiner
                  {... provided,draggableProps}
                  {... provided.draHandleProps}
                  ref = { provided.innerRef}
                  isDragging = {snapshot.isDragging} >
              {task.content}
            </Container>
      )}
   ```
  <br/>
  
  ### 🧑‍💻 메인페이지 <내 강의실 구현>
  
  - classes state를 생성하여 수강 정보를 담을 수 있는 상태 생성  
  ```
   const [classes, setClasses]= useState([]);
  ```
  - localStorage에 저장된 학생정보와 함께 서버와 get 통신
  - response로 금학기 수강중인 강의명과 id를 json양식으로 수신
  - json형태로 받은 수강정보를 class state에 저장
  ```
    let id = window.localStorage.getItem("AUTH-TOKEN");
        getClassApi(id).then((res) => {
          setClasses(res.data);
        });
  ```
  - 최종적으로 classes가 존재하면 각 class 별 컴포넌트 생성
  ```
  <Lectures>
    {classes &&
      classes.map((lecture) => (
          <LectureContainer key={lecture.id}>
              <Lecture>{lecture.name}</Lecture>
              <Button>강의실 가기</Button>
          </LectureContainer>
     ))}
  </Lectures>
  ```
  <br/>
  
  ### 🧑‍💻 이클래스 기능
  
  - ```login state```로 학생정보를 바탕으로 수강중인 강의실을 get
  
    ```
      let data = window.localStorage.getItem("X-AUTH-TOKEN");
        getLectureInfo(data).then((res) => {
         setLectures(res.list);
       });
    ```
   
  - GET통신으로 받아온 리스트를 ```<selectbox>```에 넣기 위해 ```useState```로 관리
  
    ```const [lecture, setLectures] = useState()```
    
  - 선택한 강의실 값을 컴포넌트가 전환되어도 유지하기 위해```useRecoilState```로 저장
  
    ```const [selectedValue, setSelectedValue] = useRecoilState(selectedValueState)```
    
  - [과제, 공지사항, 성적부, 출석]에 해당하는 컴포넌트들을 ```useRecoilState```로 관리
  
     ```const [feature, setFeature] = useRecoilState(FeatureState)```
     
  - ```filter()```함수를 사용하여 각 컴포넌트에 맞게 값들을 불러옴
 <br/>
 
 ### 🧑‍💻 유드림스 기능

- ```Category``` 및 ```SubCategory```로 유드림스 컴포넌트 관리

    ```
      export const AppNexus = () => {
  const category = useRecoilValue(CategoryState);
  const subcategory = useRecoilValue(SubCategoryState);

  if (category === 1) return <Authority />;
  if (category === 2 && subcategory === 1) return <Record />;
  if (category === 2 && subcategory === 2) return <Timetable />;
  if (category === 2 && subcategory === 3) return <Grade />;
  return <></>;
};
    ```

 ### 🧑‍💻 성적증명서 기능

- ```qrcode.react```를 통한 성적 위변조 확인

 ```const { id } = useParams();```
params를 통해 학생의 성적 정보를 가져올 수 있음
