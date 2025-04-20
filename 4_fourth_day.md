HTML 사용법  3
==  

## 📚 목차  
1. [입력 폼(Form)](#입력-폼form)
2. [시맨틱 태그(Semantic Tags)](#시맨틱-태그semantic-tags)
3. [레이아웃 구조 잡기](#레이아웃-구조-잡기)
4. [실습용 코드 예제](#실습용-코드-예제)
5. [추가 정보](#추가-정보)
---

## 입력 폼(Form)

사용자에게 입력값을 받을 때 사용하는 게 `<form>`이다.

```html
<form action="/submit" method="post">
  <label for="name">이름:</label>
  <input type="text" id="name" name="name">
  <br>

  <label for="email">이메일:</label>
  <input type="email" id="email" name="email">
  <br>

  <input type="submit" value="제출">
</form>
```

| 태그 | 설명 |
|----|----|
|`<form>` | 폼 영역을 지정|
|`action` | 제출될 서버 주소|
|`method` | 전송 방식 (get, post)|
|`<input>` | 사용자 입력 칸|
|`<label>` | 입력창 제목 연결|
|`<textarea>` | 여러 줄 입력|
|`<button>` | 버튼 생성|



---

## 시맨틱 태그(Semantic Tags)

시맨틱 태그는 HTML 구조의 의미를 명확하게 나타내준다.
검색엔진, 화면낭독기 등에 좋고, 코드도 깔끔해진다.

|태그 | 의미 | 예시 사용처|
|----|----|----|
|`<header> `| 머리말 영역 | 로고, 메뉴 등|
|`<nav>` | 내비게이션 | 메뉴 링크|
|`<main>` | 주요 콘텐츠 | 본문 내용|
|`<section>` | 구획 | 본문 내 구역|
|`<article>` | 독립된 내용 | 블로그 글 등|
|`<aside> `| 부가 콘텐츠 | 광고, 사이드바|
|`<footer>` | 바닥글 영역 | 저작권, 연락처|

```html
<header>사이트 제목</header>
<nav>메뉴 목록</nav>
<main>
  <section>
    <article>포스트 내용</article>
  </section>
</main>
<footer>Copyright © 안준</footer>
```
---

## 레이아웃 구조 잡기

HTML5부터는 div보다는 시맨틱 태그로 구조를 나누는 게 좋다.

```md
- header: 사이트 제목
- nav: 메뉴
- main
  - section
    - article
- footer: 하단 정보
```
```html
<body>
  <header>
    <h1>안준의 블로그</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#">홈</a></li>
      <li><a href="#">소개</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <article>
        <h2>첫 번째 글</h2>
        <p>내용입니다.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>ⓒ 2025 안준 All rights reserved.</p>
  </footer>
</body>
```
---

## 실습용 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>HTML 3일차 완성</title>
</head>
<body>
  <header>
    <h1>안준의 웹사이트</h1>
  </header>

  <nav>
    <a href="#">홈</a> | <a href="#">블로그</a> | <a href="#">연락</a>
  </nav>

  <main>
    <section>
      <article>
        <h2>HTML을 3일만에 마스터하기</h2>
        <p>이 글은 3일차 학습 내용입니다.</p>
      </article>

      <form action="/submit" method="post">
        <h3>문의하기</h3>
        <label for="msg">메시지:</label><br>
        <textarea id="msg" name="msg" rows="4" cols="40"></textarea><br>
        <button type="submit">보내기</button>
      </form>
    </section>
  </main>

  <footer>
    <small>© 2025 안준의 HTML 학습일지</small>
  </footer>
</body>
</html>

```

---

##  추가 정보

### `<div>`와 시멘틱 태그의 차이

### div란?
* 나누기 위한 박스
* 아무 의미 없음
* 사람이 보기 힘듦
* 검색엔진 등 컴퓨터도 무슨 영역인지 모름

예시:
```html
<div class="header">사이트 제목</div>
<div class="nav">메뉴</div>
<div class="content">본문 내용</div>
```

### 시멘틱 태그란?
* 의미(Semantic)를 가진 태그
* 영역이 뭐하는 곳인지 알려줌

예시: 
```html
<header>사이트 제목</header>
<nav>메뉴</nav>
<main>본문 내용</main>
<footer>하단 정보</footer>
```

### 시멘틱 태그와 div비교
||`<div>`|시멘틱 태그|
|------|-------|-------|
|의미|없음|있음|
|검색엔진|불리함|검색엔진이 구조 이해 가능|
|접근성|스크린 리더가 헷갈려함|시각장애인 보조 도구에 도움|
|코드 가독성|길어져서 가독성 나쁨|태그만 봐도 구역파악 가능|
|그에 따른 유지보수| 복잡함|구조파악 쉬움|

----
### 결론
* div를 사용하더라도 시멘틱 태그를 기본골자로 사용하는게 좋음
* div는 박스, 시맨틱 태그는 뜻이 있는 박스