기존의 todolist에서 로직을 차용해 작업중입니다.

commit #1
/db.json 추가
/src/shared/Request.js에서 BaseURL 수정, access_token 추가
/public/index.html 수정

commit #2
/src/shared/Request.js에서 Authorization 수정
/src/redux/modules/posts.js -> postSlice.js로 파일명 변경
/src/App.js 수정
/src/index.js 수정
/src/pages/Home.jsx 수정
thunk는 일단 배제

commit #3
/src/shared/Router.js 추가
/src/App.js 수정
/src/pages/List.jsx 추가
/src/pages/Detail.jsx 추가