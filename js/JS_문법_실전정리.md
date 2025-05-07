
# 📘 자바스크립트 기초 문법 + 실전 사용법 설명 (크래프톤 정글 Chapter 2 기반)


## ✅ 변수 선언 (let, const, var)

```js
let x = 10;
const y = 20;
var z = 30;
```

| 키워드 | 의미 | 사용 시 주의 |
|--------|------|---------------|
| `let` | 블록 스코프 변수 (변경 가능) | 재선언 불가, 재할당 가능 |
| `const` | 상수 (변경 불가능한 변수) | 재선언 & 재할당 모1두 불가 |
| `var` | 함수 스코프 (옛 방식) | 호이스팅 문제로 사용 지양 |

**실전 사용법:**  
- 가능하면 `let`과 `const`만 사용한다.  
- 값이 절대 변하지 않아야 한다면 `const`를 쓴다.  


## ✅ 조건문

```js
if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else {
  console.log("C등급");
}
```

- 조건을 위에서 아래로 평가함
- 조건이 true인 블록만 실행
- `else`는 모든 조건이 false일 경우 실행

**실전 사용법:**  
- 점수, 로그인 상태 등 조건 분기 로직에 자주 사용됨



## ✅ 반복문

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- 초기값 → 조건 → 증가식 순으로 동작
- `while`문도 가능하지만 `for`가 더 명확

**실전 사용법:**  
- 리스트 출력, 반복 DOM 생성 등에 자주 사용



## ✅ 함수 정의 및 호출

```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("루온"));
```

- `function` 키워드로 정의
- `return` 키워드는 결과값 반환
- 재사용 가능한 코드 블록으로 구성됨

**실전 사용법:**  
- 이벤트 반응, 계산, 템플릿 생성 등에 핵심 사용

---

## ✅ 배열과 객체

```js
const fruits = ["사과", "바나나"];
console.log(fruits[0]);

const person = {
  name: "루온",
  age: 20,
};
console.log(person.name);
```

- 배열은 순서 있는 데이터 모음
- 객체는 키-값 구조

**실전 사용법:**  
- 서버로부터 받은 JSON 데이터, 사용자 정보 등 구조적 데이터 관리에 사용

---

## ✅ DOM 조작 (문서 객체 모델)

### 1. 요소 선택

```js
document.getElementById("title");
document.querySelector(".highlight");
```

- `getElementById`: ID 기반 단일 요소
- `querySelector`: CSS 선택자 기반 단일 요소

**실전 사용법:**  
- 특정 요소에 텍스트 변경, 클래스 조작, 이벤트 등록할 때 사용

---

### 2. 내용 및 스타일 변경

```js
document.querySelector("h1").innerText = "제목 바꾸기";
document.querySelector("h1").style.color = "blue";
```

- `innerText`: 텍스트 내용을 바꿈
- `style`: 인라인 CSS 조작

**실전 사용법:**  
- 버튼 클릭 시 실시간 화면 변경 등

---

### 3. 이벤트 등록

```js
document.querySelector("button").addEventListener("click", function () {
  alert("클릭됨!");
});
```

- `addEventListener`: 특정 이벤트 발생 시 실행할 함수 등록
- `click`, `submit`, `mouseover` 등 다양한 이벤트 지원

**실전 사용법:**  
- 버튼 누름, 입력 완료, 스크롤 등 사용자와 상호작용 처리

---

## 🧠 실전 요약

| 개념 | 실무 활용 |
|------|-----------|
| `let`, `const` | 상태 저장, 제어 흐름 |
| 조건문 / 반복문 | 화면 분기, 목록 출력 |
| 함수 | 코드 재사용, 로직 분리 |
| 배열 / 객체 | 데이터 그룹 관리 |
| DOM 조작 | 화면 동적 반응, 입력 처리 |
| 이벤트 | 사용자 입력 처리 |

---

## 🔗 관련 추천 사이트

- [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)
- [CodePen.io](https://codepen.io)

