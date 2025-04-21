
# 🎨 CSS 사용법 – 1일차  

## 📚 오늘의 학습 목표  
1. [CSS란?](#1-css란)
2. [CSS 적용 방법 (3가지)](#2-css-적용-방법-3가지)
3. [선택자(Selector)](#3-선택자-selector)
4. [색상, 배경색, 기본 스타일 속성](#4-색상-배경색-기본-스타일)
5. [실습 예제](#5-실습-예제-내부-스타일)
6. [정리](#정리)

## 1. CSS란?

**CSS (Cascading Style Sheets)**  
 HTML 요소에 **스타일(디자인)**을 입히는 언어다.

> "HTML이 뼈대라면 CSS는 옷과 화장이다."


## 2. CSS 적용 방법 3가지

| 방법 | 예시 | 특징 |
|------|------|------|
| 인라인 | `<p style="color:red">빨강</p>` | 한 줄만 적용 |
| 내부 스타일 | `<style> p { color:blue; } </style>` | `<head>` 안에 작성 |
| 외부 스타일 | `<link rel="stylesheet" href="style.css">` | 보통 이 방식이 가장 정석 |


## 3. 선택자 (Selector)

어떤 요소에 스타일을 줄지를 선택하는 방법!

### 📌 기본 선택자

```css
/* 모든 p 태그에 적용 */
p {
  color: green;
}
```

| 선택자 | 설명 | 예시 |
|--------|------|------|
| `태그` | 특정 태그 전체 | `p`, `h1` 등 |
| `.클래스` | class 지정 요소 | `.highlight` |
| `#아이디` | id 지정 요소 (고유) | `#main-title` |
| `*` | 전체 요소 | `* {margin: 0;}` |


## 4. 색상, 배경색, 기본 스타일

### 📌 색상 지정

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
```

### 📌 배경색

```css
background-color: yellow;
```

### 📌 기타 속성

| 속성 | 설명 |
|------|------|
| `color` | 글자 색 |
| `background-color` | 배경색 |
| `font-size` | 글자 크기 |
| `font-weight` | 굵기 (`normal`, `bold`, `100~900`) |
| `text-align` | 정렬 (`left`, `center`, `right`) |
| `margin`, `padding` | 바깥/안쪽 여백 |
| `border` | 테두리 |


## 5. 실습 예제 (내부 스타일)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>CSS 1일차</title>
  <style>
    body {
      background-color: #f9f9f9;
    }

    h1 {
      color: blue;
      text-align: center;
    }

    p {
      color: gray;
      font-size: 18px;
    }

    .highlight {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>안준의 CSS 1일차</h1>
  <p>이건 일반 문단입니다.</p>
  <p class="highlight">이건 강조된 문장입니다!</p>
</body>
</html>
```


## 정리

- CSS는 HTML에 스타일을 입히는 언어!
- 선택자, 색상, 텍스트 스타일을 자유롭게 조절 가능
- `<style>` 태그로 HTML 안에 넣거나 `.css` 파일로 외부에 관리 가능


## 다음 예고: 2일차

| 배울 것 | 목적 |
|----------|------|
| 텍스트 스타일 | 웹폰트, 줄간격, 정렬 등 다듬기 |
| 박스 모델 | margin, padding, border 완전 이해하기 |
| 레이아웃 시작 | `display`, `width/height` 등
