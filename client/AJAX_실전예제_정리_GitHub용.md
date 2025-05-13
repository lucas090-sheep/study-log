
# 🌐 AJAX 실전 예제 (GitHub 업로드용)  

---

## ✅ 프로젝트 개요
- 비동기적으로 서버에서 데이터를 받아오고, 사용자 정보를 전송하는 AJAX 예제.
- 게시글 불러오기 (GET 요청) + 사용자 등록 (POST 요청)
- HTML + JavaScript 파일 구조로 구성
- 서버는 **JSONPlaceholder** API를 사용 (테스트용 API)

---

## ✅ 파일 구조
```
ajax_example_project/
├── index.html
└── app.js
```

---

## ✅ HTML 파일 (index.html)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>AJAX 실전 예제</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #postList { margin-top: 20px; }
    .post { margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; }
  </style>
</head>
<body>

  <h1>AJAX 실전 예제</h1>

  <h2>📌 게시글 불러오기</h2>
  <button onclick="loadPosts()">게시글 가져오기</button>
  <div id="postList"></div>

  <h2>📌 사용자 정보 등록</h2>
  <form id="userForm" onsubmit="sendUser(event)">
    <input type="text" id="username" placeholder="이름" required>
    <input type="email" id="email" placeholder="이메일" required>
    <button type="submit">등록</button>
  </form>
  <div id="result"></div>

  <script src="app.js"></script>
</body>
</html>
```

### 🔹 설명
- `<button onclick="loadPosts()">`: 클릭 시 JS의 `loadPosts()` 함수 실행
- `<div id="postList">`: 서버에서 불러온 게시글을 표시할 영역
- `<form onsubmit="sendUser(event)">`: 폼 제출 시 JS의 `sendUser()` 실행 (페이지 새로고침 방지)
- `<input>`: 사용자 이름과 이메일 입력
- `<script src="app.js">`: 외부 자바스크립트 파일 연결

---

## ✅ JavaScript 파일 (app.js)

```javascript
// 게시글 불러오기 (GET 요청)
async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("서버 통신 실패");

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("에러 발생:", error);
    document.getElementById("postList").innerText = "게시글 불러오기 실패.";
  }
}
```

### 🔹 코드 설명
- `async function loadPosts()`: 비동기 함수로 서버에서 데이터를 받아옴.
- `fetch()`: 서버로 GET 요청 (비동기)
- `await`: 응답을 기다림 (Promise 완료될 때까지)
- `response.ok`: 서버 응답 성공 여부 확인
- `response.json()`: 응답 데이터를 JSON으로 변환
- `displayPosts(posts)`: 받아온 데이터 화면에 표시

---

```javascript
// 게시글 목록 화면 표시
function displayPosts(posts) {
  const postList = document.getElementById("postList");
  postList.innerHTML = posts.slice(0, 5).map(post => `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `).join("");
}
```

### 🔹 코드 설명
- `posts.slice(0, 5)`: 첫 5개 게시글만 표시
- `.map()`: 각 게시글을 HTML로 변환
- `.join("")`: HTML 문자열로 결합
- `.innerHTML = ...`: HTML로 게시글 표시

---

```javascript
// 사용자 정보 전송 (POST 요청)
async function sendUser(event) {
  event.preventDefault(); // 폼 기본 제출 막기

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, email: email }),
    });

    if (!response.ok) throw new Error("서버 오류");

    const data = await response.json();
    document.getElementById("result").innerText = `사용자 등록 완료: ${data.name} (${data.email})`;
  } catch (error) {
    document.getElementById("result").innerText = "사용자 등록 실패!";
    console.error("에러:", error);
  }
}
```

### 🔹 코드 설명
- `event.preventDefault()`: 폼 기본 동작 (새로고침) 방지
- 사용자 입력값을 읽어 변수에 저장 (`username`, `email`)
- `fetch()`로 서버에 POST 요청
  - `method: "POST"`: POST 방식 지정
  - `headers`: JSON 데이터 전송 명시
  - `body`: JSON 형식으로 사용자 정보 전송
- 서버 응답에 따라 결과 메시지 표시

---

## ✅ GitHub 업로드 방법
1. 프로젝트 폴더 (ajax_example_project) 생성
2. HTML, JS 파일을 해당 폴더에 저장
3. GitHub에 새로운 저장소 생성
4. 로컬 프로젝트 폴더에서 터미널 명령 실행:
```bash
git init
git add .
git commit -m "AJAX 실전 예제 업로드"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

---

## ✅ 실전 활용 팁
- fetch로 데이터 불러올 때 `await`으로 응답 기다리기.
- 에러 처리 필수: `try...catch`로 안전성 확보.
- `JSON.stringify()`로 서버에 데이터 전송 (POST).
- GitHub Pages로 바로 웹페이지로 호스팅 가능.

---

## ✅ 다음으로
- 로딩 스피너 추가 (사용자에게 응답 대기 중임을 알려줌)
- 입력값 유효성 검사 (이메일 형식 확인)
- AJAX로 파일 업로드 (이미지, 문서 등)
