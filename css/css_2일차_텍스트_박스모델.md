# 🎨 CSS 사용법 – 2일차  

## 📚 오늘의 학습 목표  
1. 텍스트 스타일 속성  
2. 웹폰트 사용하기  
3. 박스 모델(Box Model) 이해하기  
4. 실습 예제


## 1. 텍스트 스타일 속성

### 📌 기본 속성

```css
p {
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
}
```

| 속성 | 설명 | 예시값 |
|------|------|--------|
| `font-size` | 글자 크기 | `16px`, `1.2em` |
| `font-weight` | 굵기 | `normal`, `bold`, `400~900` |
| `font-style` | 기울임 | `normal`, `italic` |
| `text-align` | 정렬 | `left`, `center`, `right` |
| `text-decoration` | 밑줄, 취소선 | `none`, `underline`, `line-through` |
| `line-height` | 줄 간격 | `1.5`, `2` 등 |


## 2. 웹폰트 사용하기

### 📌 Google Fonts 적용 예

```html
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Nanum Gothic', sans-serif;
  }
</style>
```


## 3. 박스 모델(Box Model)

```
┌─────────────────────┐
│     margin          │
│  ┌───────────────┐  │
│  │   border       │ │
│  │ ┌───────────┐ │ │
│  │ │ padding   │ │ │
│  │ │ ┌───────┐ │ │ │
│  │ │ │내용(content)││ │
```

### 📌 주요 속성

| 속성 | 설명 |
|------|------|
| `margin` | 바깥 여백 |
| `padding` | 안쪽 여백 |
| `border` | 테두리 |
| `width` / `height` | 너비 / 높이 |

```css
.box {
  width: 200px;
  height: 100px;
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}
```


## 4. 실습 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>CSS 2일차</title>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Nanum Gothic', sans-serif;
      margin: 40px;
    }

    h1 {
      font-size: 30px;
      text-align: center;
      color: #333;
    }

    p {
      font-size: 18px;
      line-height: 1.6;
      text-align: justify;
    }

    .box {
      width: 300px;
      height: 150px;
      background-color: #f0f0f0;
      padding: 20px;
      margin: 30px auto;
      border: 2px solid #888;
    }
  </style>
</head>
<body>

  <h1>CSS 2일차: 텍스트 & 박스모델</h1>
  <p>CSS를 이용하면 글자의 크기, 줄간격, 정렬, 폰트 등 텍스트를 더 아름답게 표현할 수 있다.</p>

  <div class="box">
    이것은 박스모델 예시입니다.  
    padding, margin, border를 조절해 다양한 레이아웃을 만들 수 있다.
  </div>

</body>
</html>
```

## 추가 정보 ✨
웹폰트를 얻을 수 있는 사이트.
### 1. [Google Fonts](https://fonts.google.com/)
* 가장 유명함

* 사용법:
  1. [fonts.google.com](https://fonts.google.com/) 접속
  2. 원하는 폰트 검색 (예: **Nanum Gothic**)
  3. `+ Select this style` 클릭
  4. 링크 태그 복사해서 <head>에 붙여넣기:
### 2. [눈누 (Noonnu)](https://noonnu.cc/)
* 국산 웹폰트만 모아놓음

* 사용법:
  1. 사이트 접속 → 원하는 폰트 클릭
  2. `<link>` 태그와 `font-family` 자동 제공됨
  3. 그대로 복사해서 HTML에 붙여넣기


### 3. [Adobe Fonts](https://fonts.adobe.com/)
* Adobe 계정 필요
* 웹에 직접 연결 가능

## 🎯 오늘의 정리

| 배운 개념 | 핵심 요약 |
|-----------|-----------|
| 텍스트 스타일 | `font-size`, `line-height`, `text-align` 등으로 제어 |
| 웹폰트 | Google Fonts로 쉽게 적용 가능 |
| 박스 모델 | `margin`, `padding`, `border`의 조합으로 여백과 틀 조정 |

---

## 내일 예고 – 3일차

| 주제 | 설명 |
|------|------|
| `display` 속성 | `block`, `inline`, `flex`, `grid` |
| Flexbox 레이아웃 | 가장 많이 쓰는 레이아웃 방법 |
| 실전 배치 연습 | 카드형 UI, 정렬, 배치 등
