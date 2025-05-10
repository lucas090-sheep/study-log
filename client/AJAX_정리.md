
# 🌐 AJAX (Asynchronous JavaScript and XML) - 정글 스타일로 정리


## ✅ 1. AJAX란?
- **AJAX (Asynchronous JavaScript and XML)**는 웹페이지를 **새로고침 없이** 서버와 데이터를 주고받을 수 있게 하는 기술.
- JSON, XML, HTML 등 다양한 데이터 형식을 사용할 수 있지만, **JSON이 가장 많이 사용됨**.
- 웹 페이지 일부만 동적으로 변경할 수 있어 **사용자 경험(UX) 향상**에 필수적.


## ✅ 2. AJAX의 핵심: 비동기 통신
- **비동기(Asynchronous)**: 서버와 통신하는 동안에도 페이지는 사용자와 상호작용할 수 있음.
- 페이지 전체가 아니라 **일부만 업데이트**할 수 있음.

### 🌐 예시: 동기 vs 비동기
- **동기적**: 페이지 전체가 새로고침됨.
- **비동기적 (AJAX)**: 버튼을 눌러도 페이지는 그대로 있고, 내용만 바뀜.


## ✅ 3. AJAX 요청 방식 3가지

| 방식 | 설명 | 특징 |
|------|------|------|
| `XMLHttpRequest` | 옛날 방식 | 코드 복잡, 직관성 부족 |
| `fetch()` | 최신 표준 | Promise 기반, 코드 간결 |
| `async/await` | 최적 방식 | 가독성 최고, 코드 관리 용이 |


## ✅ 4. fetch() 사용법 (최신 표준)

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())  // 서버 응답 JSON 변환
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("에러 발생:", error);
  });
```

### 🔹 설명
- `fetch()`는 **Promise 기반**: 비동기 작업을 처리하기 위한 메서드.
- `.then()`은 작업 성공 시 실행할 코드.
- `.catch()`는 에러 발생 시 실행할 코드.

## ✅ 5. async/await 사용 (가장 깔끔한 방식)

```js
async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

loadData();
```

### 🔹 설명
- `async` 키워드: 함수 내부에서 비동기 작업 가능.
- `await` 키워드: Promise 결과를 기다림 (동기처럼 코드 작성 가능).
- `try...catch`로 에러 안전 처리.


## ✅ 6. POST 요청 (서버에 데이터 보내기)

```js
async function sendData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "루온의 글",
      body: "안녕하세요, 이건 테스트입니다.",
      userId: 1,
    }),
  });

  const data = await response.json();
  console.log("서버 응답:", data);
}

sendData();
```

### 🔹 설명
- `method: "POST"`: 서버로 데이터 전송
- `headers`: 전송할 데이터 형식 지정 (`application/json`)
- `body`: 전송할 데이터(JSON 형식) 지정


## ✅ 7. 실전에서 AJAX 사용 패턴

```html
<button onclick="loadPosts()">게시글 불러오기</button>
<div id="postList"></div>

<script>
async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  
  const postList = document.getElementById("postList");
  postList.innerHTML = posts.slice(0, 5).map(post => `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `).join("");
}
</script>
```

### 🔹 설명
- 버튼 클릭 시 서버에서 게시글을 불러옴.
- 첫 5개의 게시글을 화면에 표시.
- JS의 `map`과 `join`으로 HTML 생성.


## ✅ 8. AJAX 실전 팁
- 서버에서 JSON을 주고받을 때 `Content-Type` 확인 (application/json)
- 비동기 통신 중 로딩 표시 (로딩 스피너) 추가 권장
- 에러는 항상 `try...catch` 또는 `.catch()`로 처리
- 최신 웹 개발에서는 **async/await** 방식 권장

---

## ✅ 9. AJAX 코드 패턴 정리

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("네트워크 오류");
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("AJAX 에러:", error);
  }
}

// 사용 예시
fetchData("https://jsonplaceholder.typicode.com/posts")
  .then(data => console.log(data));
```

### 🔹 설명
- 범용적인 AJAX 함수로, 여러 API 호출에 재사용 가능.
- `response.ok`로 서버 응답 상태 확인.
- 실전에서는 이 함수를 필요한 곳에서 호출하는 방식으로 사용.


## ✅ 10. AJAX 관련 참고 사이트
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)
- [JSONPlaceholder (API 테스트용)](https://jsonplaceholder.typicode.com/)


## ✅ 요약: AJAX 실전 핵심 정리
- 페이지 전체 새로고침 없이 서버와 데이터 통신 가능
- 최신 방식: **async/await + fetch**
- 에러는 항상 `try...catch`로 처리
- 서버 응답 데이터 형식(JSON) 확인 필수
