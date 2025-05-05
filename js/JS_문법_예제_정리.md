
# 🚀 자바스크립트 실무 문법 + 실전 예제 정리

---

## ✅ 1. 변수 선언

```js
let name = "루온";  // 변경 가능
const age = 25;     // 변경 불가
```

---

## ✅ 2. 함수 선언과 호출

```js
function greet(name) {
  return "안녕, " + name + "!";
}

console.log(greet("루온")); // 출력: 안녕, 루온!
```

---

## ✅ 3. 조건문

```js
if (age >= 20) {
  console.log("성인입니다");
} else {
  console.log("미성년자입니다");
}
```

---

## ✅ 4. 반복문

```js
for (let i = 0; i < 3; i++) {
  console.log("반복: " + i);
}
```

---

## ✅ 5. 배열과 객체

```js
let fruits = ["사과", "바나나"];
fruits.push("딸기");

let user = {
  name: "루온",
  age: 25,
};
console.log(user.name);
```

---

## ✅ 6. 이벤트 처리

```html
<button id="clickBtn">눌러보세요</button>

<script>
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("클릭됨!");
});
</script>
```

---

## ✅ 7. 폼 입력값 가져오기

```html
<input type="text" id="nameInput">
<button onclick="sayHi()">확인</button>

<script>
function sayHi() {
  let name = document.getElementById("nameInput").value;
  alert("안녕하세요, " + name + "님!");
}
</script>
```

---

## ✅ 8. JSON 데이터 처리

```js
let user = { name: "루온", age: 25 };
let jsonStr = JSON.stringify(user);  // 객체 → 문자열
let parsed = JSON.parse(jsonStr);    // 문자열 → 객체
```

---

## ✅ 9. 날짜와 시간

```js
let now = new Date();
console.log(now.toLocaleString());  // 예: 2025.04.29. 오전 10:00:00
```

---

## ✅ 10. fetch로 데이터 가져오기

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

# 💡 실무에서 자주 쓰는 함수 & 개념 요약

| 기능 | 코드 예시 |
|------|-----------|
| 요소 숨기기 | `el.style.display = "none";` |
| class 토글 | `el.classList.toggle("active");` |
| 디바운싱 | `setTimeout`, `clearTimeout` |
| 지연 실행 | `setTimeout(() => {}, 1000);` |
| 주기 실행 | `setInterval(() => {}, 1000);` |

---

# 🧪 실전 예제 사이트 추천

| 사이트 | 설명 |
|--------|------|
| [MDN Web Docs](https://developer.mozilla.org/ko/) | 공식 문법 & 예제 |
| [W3Schools](https://www.w3schools.com/js/) | 기초 튜토리얼 |
| [JavaScript.info](https://javascript.info/) | 실무 중심 이론 |
| [CodePen.io](https://codepen.io) | 실시간 코드 테스트 |
| [StackBlitz](https://stackblitz.com) | 웹앱 실시간 개발 환경 |

---

# 🎯 마무리 요약

- 자바스크립트는 사용자와 **상호작용**, **데이터 처리**, **동적 화면 제어**를 위한 핵심 기술
- 실무에서는 DOM 조작, 이벤트 처리, 폼 제어, fetch 사용 빈도 높음
- 연습은 항상 **직접 코딩 + 콘솔 확인**이 최고!

