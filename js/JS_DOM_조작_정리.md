
# 🧠 자바스크립트 DOM 조작 정리



## ✅ 1. DOM이란?

DOM (Document Object Model)은 HTML 문서를 자바스크립트가 **제어할 수 있도록 만든 구조**이다.  
웹페이지를 **트리 구조 객체**로 표현하여 JS로 조작할 수 있게 해준다.



## ✅ 2. DOM 요소 선택

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `getElementById(id)` | ID로 요소 선택 | `document.getElementById("title")` |
| `getElementsByClassName(class)` | 클래스명으로 선택 | `document.getElementsByClassName("box")` |
| `getElementsByTagName(tag)` | 태그명으로 선택 | `document.getElementsByTagName("p")` |
| `querySelector(selector)` | CSS 선택자 하나 | `document.querySelector(".item")` |
| `querySelectorAll(selector)` | CSS 선택자 여러 개 | `document.querySelectorAll("ul li")` |


## ✅ 3. 내용 조작

| 속성 | 설명 | 예시 |
|------|------|------|
| `innerText` | 텍스트 변경 | `el.innerText = "변경된 텍스트"` |
| `innerHTML` | HTML 코드 삽입 | `el.innerHTML = "<strong>굵게</strong>"` |
| `textContent` | 모든 텍스트 읽기 | `el.textContent` |


## ✅ 4. 스타일 조작

```js
el.style.color = "red";
el.style.fontSize = "18px";
el.style.backgroundColor = "#f0f0f0";
```

> CSS 속성은 `카멜표기법(background-color → backgroundColor)`을 사용


## ✅ 5. 클래스 조작

| 메서드 | 설명 |
|--------|------|
| `classList.add("이름")` | 클래스 추가 |
| `classList.remove("이름")` | 클래스 제거 |
| `classList.toggle("이름")` | 존재하면 제거, 없으면 추가 |
| `classList.contains("이름")` | 포함 여부 확인 (true/false) |


## ✅ 6. 속성 조작

| 메서드 | 설명 |
|--------|------|
| `getAttribute("name")` | 속성 값 가져오기 |
| `setAttribute("name", "value")` | 속성 값 설정 |
| `removeAttribute("name")` | 속성 제거 |


## ✅ 7. 요소 추가 / 삭제

```js
// 요소 생성
let newEl = document.createElement("div");
newEl.innerText = "새 요소";

// 추가
document.body.appendChild(newEl);

// 삭제
let target = document.getElementById("target");
target.remove();
```


## ✅ 8. 이벤트 연결

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("클릭됨!");
});
```

| 이벤트 종류 | 설명 |
|-------------|------|
| `click` | 클릭 |
| `mouseover` | 마우스 오버 |
| `keydown` | 키보드 누름 |
| `submit` | 폼 제출 |


## ✅ 종합 예제

```html
<p id="text">Hello</p>
<button onclick="change()">Click</button>

<script>
function change() {
  let el = document.getElementById("text");
  el.innerText = "루온 안녕!";
  el.style.color = "blue";
  el.classList.add("highlight");
}
</script>
```


## ✨ 요약

- DOM은 웹페이지의 HTML 요소를 자바스크립트로 제어하는 구조다.
- 선택 → 조작 → 반응 순서로 작동한다.
- 실전에서는 `querySelector`, `innerText`, `addEventListener` 가장 많이 씀

---

> 다음은 이벤트 종류, 입력값 제어(Form), 동적 생성 등의 고급 조작으로 확장할 수 있음!
