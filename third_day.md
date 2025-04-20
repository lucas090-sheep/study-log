HTML 사용법  2
==  

## 📚 목차  
1. [리스트 만들기 (ul, ol)](#리스트-만들기-ul-ol)  
2. [텍스트 꾸미기 (b, i, mark 등)](#텍스트-꾸미기-b-i-mark-등)  
3. [표 만들기 (table)](#표-만들기-table)  
4. [실습용 코드 예제](#실습용-코드-예제)

---

## 리스트 만들기 `ul`, `ol`

### 🔸 순서 없는 리스트 `ul`

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
* 마크다운의 -, *와 같다.
* `ul`: unordered list
* `li`: list item (항목)

🔸 순서 있는 리스트 (ol)
```html
<ol>
  <li>웹기획</li>
  <li>디자인</li>
  <li>개발</li>
</ol>
```
* 마크다운의 1., 2. 과 같다.
* `ol`: ordered list



---

## 텍스트 꾸미기 (b, i, mark 등)

🔸 HTML은 텍스트 스타일을 다양하게 바꿀 수 있음.

| 태그 | 설명 | 예시 |
|-----|-----|-----|
|`<b>` | 굵은 글씨 (단순 시각 강조) | <b>굵게</b>|
|`<i>` | 기울임 (단순 시각 강조) | <i>기울임</i>|
|`<strong>` | 의미 강조 + 굵게 | <strong>중요</strong>|
|`<em>` | 의미 강조 + 기울임 | <em>강조</em>|
|`<mark>` | 형광펜 강조 | <mark>강조</mark>|
|`<small>` | 작게 표시 | <small>작은 글자</small>|
|`<del>` | 취소선 | <del>삭제된 텍스트</del>|
|`<ins>` | 밑줄 | <ins>추가된 텍스트</ins>|

---

## 표 만들기 (table)

HTML에서 표는 `<table>`로 만들고,  
행은 `<tr>`, 열은 `<td>`, 제목 셀은 `<th>`로 구성됨

```html
<table border="1">
  <tr>
    <th>이름</th>
    <th>나이</th>
  </tr>
  <tr>
    <td>안준</td>
    <td>20</td>
  </tr>
</table>
```

| 태그 | 설명 |
|------|------|
|`<table>` | 표 전체|
|`<tr>` | 한 줄 (행)|
|`<th>` | 제목 셀 (굵고 가운데 정렬)|
|`<td>` | 일반 셀|

※ border="1"은 연습용. CSS로 스타일링하는 게 표준임.

---

## 실습용 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>HTML 2일차</title>
</head>
<body>

  <h1>📋 오늘의 공부</h1>

  <h2>1. 내가 배우는 기술</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>2. 웹 개발 순서</h2>
  <ol>
    <li>기획</li>
    <li>디자인</li>
    <li>개발</li>
  </ol>

  <h2>3. 텍스트 스타일</h2>
  <p><b>굵게</b>, <i>기울임</i>, <mark>강조</mark>, <del>삭제</del></p>

  <h2>4. 나의 정보</h2>
  <table border="1">
    <tr>
      <th>항목</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>이름</td>
      <td>안준</td>
    </tr>
    <tr>
      <td>목표</td>
      <td>HTML 마스터</td>
    </tr>
  </table>

</body>
</html>
```

---

##  마무리

* `<ul>`, `<ol>`, `<li>` → 목록 만들기

* `<b>`, `<i>`, `<mark>` 등 → 텍스트 꾸미기

* `<table>`, `<tr>`, `<td>`, `<th>` → 표 만들기

