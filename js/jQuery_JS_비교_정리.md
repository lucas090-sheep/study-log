
# 🌐 jQuery 기초 정리 (크래프톤 정글 기반)

---

## ✅ jQuery란?

jQuery는 자바스크립트를 더 **간단하고 짧게** 쓸 수 있도록 만든 JavaScript 라이브러리이다.  
HTML 조작, 이벤트 처리, 애니메이션, AJAX 등을 한 줄 코드로 구현할 수 있다.

---

## ✅ 기본 문법

```js
$(document).ready(function () {
  console.log("페이지 로딩 완료");
});
```

또는 더 짧게:
```js
$(function () {
  console.log("페이지 로딩 완료");
});
```

---

## ✅ 주요 기능별 예제

### 🔹 요소 선택

| 기능 | jQuery | JavaScript (Vanilla) |
|------|--------|-----------------------|
| id 선택 | `$("#id")` | `document.getElementById("id")` |
| class 선택 | `$(".class")` | `document.querySelector(".class")` |
| 태그 선택 | `$("p")` | `document.querySelector("p")` |

---

### 🔹 이벤트 처리

```js
$("#btn").click(function () {
  alert("클릭됨!");
});
```

동등한 JS:
```js
document.getElementById("btn").addEventListener("click", function () {
  alert("클릭됨!");
});
```

---

### 🔹 DOM 조작

| 기능 | jQuery | JavaScript |
|------|--------|------------|
| 텍스트 변경 | `$("#el").text("내용")` | `el.innerText = "내용"` |
| HTML 변경 | `$("#el").html("<b>굵게</b>")` | `el.innerHTML = "<b>굵게</b>"` |
| CSS 변경 | `$("#el").css("color", "red")` | `el.style.color = "red"` |

---

### 🔹 시각 효과

```js
$("#box").hide();
$("#box").show();
$("#box").fadeIn();
$("#box").slideUp();
```

JavaScript로 직접 하려면 많은 코드가 필요하지만, jQuery는 간단하다.

---

### 🔹 AJAX 요청

```js
$.get("data.json", function (data) {
  console.log(data);
});
```

또는 POST 요청:
```js
$.post("url", { name: "루온" }, function (response) {
  console.log(response);
});
```

→ 최신 JS에서는 `fetch()` 사용 권장

---

## ❗️주의사항

- 최신 프레임워크에서는 **jQuery 사용을 지양**하고, 순수 JS (`Vanilla JS`) 또는 React/Vue 등을 선호
- 하지만 레거시 프로젝트나 빠른 프로토타입 제작에는 여전히 유용

---

## ✅ jQuery vs JavaScript 명령어 표

| 목적 | jQuery | JavaScript |
|------|--------|------------|
| 문서 로드 시 실행 | `$(function(){})` | `window.onload = function(){}` |
| 요소 선택 | `$("#id")` | `document.getElementById("id")` |
| 클래스 선택 | `$(".class")` | `document.querySelector(".class")` |
| 텍스트 변경 | `.text("내용")` | `.innerText = "내용"` |
| HTML 변경 | `.html("<b>HTML</b>")` | `.innerHTML = "<b>HTML</b>"` |
| 스타일 변경 | `.css("color", "blue")` | `.style.color = "blue"` |
| 클릭 이벤트 | `.click(fn)` | `.addEventListener("click", fn)` |
| AJAX 호출 | `$.get(url, cb)` | `fetch(url).then(res => res.json())` |

---

## 📦 추천 상황

- jQuery: 레거시 프로젝트, 간단한 테스트, 빠른 개발
- JS: 최신 웹 개발, 프레임워크 기반 프로젝트

---

## 🔗 참고 사이트

- [jQuery 공식 문서](https://api.jquery.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
