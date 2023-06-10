export const CATEGORIES = [
  {
    id: 1,
    name: "원스탑",
    subcategories: [
      { subCategoryId: 1, name: "대표권한변경", page: "Authority.jsx" },
    ],
  },
  {
    id: 2,
    name: "학사정보",
    subcategories: [
      {
        subCategoryId: 1,
        name: "학적부 열람",
        page: "Record.jsx",
      },
      {
        subCategoryId: 2,
        name: "개인 강의시간표 조회",
        page: "Timetable.jsx",
      },
      {
        subCategoryId: 3,
        name: "금학기 성적관리",
        page: "Grade.jsx",
      },
    ],
  },
];
