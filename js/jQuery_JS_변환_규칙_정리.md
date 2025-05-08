
# 🌐 jQuery → JavaScript 변환 규칙 정리

---

## ✅ 1. 선택자 규칙
- jQuery는 `$()`로 선택, JS는 `document.querySelector()`로 선택
- jQuery는 CSS 선택자처럼 간결, JS는 명시적

| jQuery | JavaScript |
|---------|-------------|
| `$("#id")` | `document.getElementById("id")` |
| `$(".class")` | `document.querySelector(".class")` |
| `$("p")` | `document.querySelectorAll("p")` |
| `$("ul li")` | `document.querySelectorAll("ul li")` |

---

## ✅ 2. 텍스트 및 HTML 조작 규칙
- `.text()`는 `.innerText`로 변환
- `.html()`는 `.innerHTML`로 변환

| jQuery | JavaScript |
|---------|-------------|
| `$("#el").text("내용")` | `el.innerText = "내용"` |
| `$("#el").html("<b>HTML</b>")` | `el.innerHTML = "<b>HTML</b>"` |

---

## ✅ 3. 스타일 변경 규칙
- `.css()`는 `.style`로 변경
- CSS 속성은 camelCase로 바꿔야 함

| jQuery | JavaScript |
|---------|-------------|
| `$("#el").css("color", "red")` | `el.style.color = "red"` |
| `$("#el").css("background-color", "blue")` | `el.style.backgroundColor = "blue"` |

---

## ✅ 4. 클래스 조작 규칙
- jQuery는 `.addClass()`, `.removeClass()`, `.toggleClass()` 사용
- JS는 `classList`로 제어

| jQuery | JavaScript |
|---------|-------------|
| `$("#el").addClass("active")` | `el.classList.add("active")` |
| `$("#el").removeClass("active")` | `el.classList.remove("active")` |
| `$("#el").toggleClass("active")` | `el.classList.toggle("active")` |

---

## ✅ 5. 이벤트 처리 규칙
- jQuery의 `.click()` 같은 이벤트 함수는 JS의 `.addEventListener()`로 전환

| jQuery | JavaScript |
|---------|-------------|
| `$("#btn").click(fn)` | `el.addEventListener("click", fn)` |
| `$("#el").on("click", fn)` | `el.addEventListener("click", fn)` |

---

## ✅ 6. DOM 조작 규칙
- 요소 생성은 `document.createElement()`
- 추가는 `.appendChild()`, 제거는 `.remove()`

| jQuery | JavaScript |
|---------|-------------|
| `$("#parent").append("<p>새 요소</p>")` | `parentEl.appendChild(newEl)` |
| `$("#el").remove()` | `el.remove()` |

---

## ✅ 7. AJAX 통신 규칙
- jQuery는 `$.get()` 또는 `$.ajax()` 사용
- JS는 `fetch()`로 전환

| jQuery | JavaScript |
|---------|-------------|
| `$.get("url", cb)` | `fetch("url").then(res => res.json()).then(cb)` |
| `$.post("url", data, cb)` | `fetch("url", { method: "POST", body: JSON.stringify(data) }).then(res => res.json()).then(cb)` |

---

## ✅ 8. 문서 로드 이벤트 규칙
- jQuery의 `$(document).ready()`는 JS의 `window.onload` 또는 `DOMContentLoaded`로 대체

| jQuery | JavaScript |
|---------|-------------|
| `$(document).ready(fn)` | `document.addEventListener("DOMContentLoaded", fn)` |
| `$(function(){})` | `document.addEventListener("DOMContentLoaded", fn)` |

---

## ✅ 🌐 요약: jQuery → JavaScript로 변환하는 3가지 핵심 규칙
1. `$()` → `document.querySelector()` 또는 `document.getElementById()`
2. `.click()` → `.addEventListener("click", fn)`
3. `.css()`, `.text()`, `.html()` → `.style`, `.innerText`, `.innerHTML`

---

## 📌 실전 팁
- jQuery에서 JS로 변환할 때는 **기능 중심으로 접근** (선택, 조작, 이벤트)
- jQuery의 축약된 코드가 JS에서는 명시적으로 길어질 수 있음
- 최신 웹 개발에서는 jQuery보다 **Vanilla JS** 또는 **프레임워크 (React, Vue)** 사용 권장

