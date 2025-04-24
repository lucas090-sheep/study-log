
# 🎨 CSS 사용법 – 3일차  


## 📚 오늘의 학습 목표  
1. `display` 속성 완전 정복  
2. Flexbox 기본 개념  
3. Flexbox로 배치하기  
4. 실전 카드 UI 예제



## 1. `display` 속성

모든 HTML 요소는 기본적으로 `display` 속성을 가지고 있어.

| 속성 | 설명 |
|------|------|
| `block` | 한 줄을 모두 차지 (div, p 등) |
| `inline` | 내용만큼만 차지 (span, a 등) |
| `inline-block` | 줄바꿈 없이 박스처럼 |
| `none` | 안 보이게 함 |
| `flex` | Flexbox 레이아웃 시작 |
| `grid` | 그리드 레이아웃 시작 |

```css
div {
  display: block;
}
span {
  display: inline;
}
```

### 📱 `display` 속성별 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>display 속성 실험</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
    }

    .title {
      font-weight: bold;
      margin-top: 30px;
      color: #222;
    }

    .box {
      padding: 10px 20px;
      margin: 5px;
      background: #e0e0e0;
      border: 1px solid #aaa;
    }

    .block { display: block; }
    .inline { display: inline; }
    .inline-block { display: inline-block; width: 100px; }
    .none { display: none; }
    .flex-container {
      display: flex;
      gap: 10px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
    }
  </style>
</head>
<body>

  <div class="title">1. display: block (기본, 한 줄 전체 차지)</div>
  <div class="box block">Block 1</div>
  <div class="box block">Block 2</div>

  <div class="title">2. display: inline (내용만큼만 차지)</div>
  <span class="box inline">Inline 1</span>
  <span class="box inline">Inline 2</span>

  <div class="title">3. display: inline-block (inline처럼 보이고 block처럼 동작)</div>
  <span class="box inline-block">Inline-block 1</span>
  <span class="box inline-block">Inline-block 2</span>

  <div class="title">4. display: none (숨김)</div>
  <div class="box none">이건 안 보여야 해요!</div>
  <p>위 요소는 보이지 않지만 HTML에는 존재합니다.</p>

  <div class="title">5. display: flex (가로 정렬, gap 있음)</div>
  <div class="flex-container">
    <div class="box">Flex 1</div>
    <div class="box">Flex 2</div>
    <div class="box">Flex 3</div>
  </div>

  <div class="title">6. display: grid (격자 형태 배치)</div>
  <div class="grid-container">
    <div class="box">Grid 1</div>
    <div class="box">Grid 2</div>
    <div class="box">Grid 3</div>
    <div class="box">Grid 4</div>
    <div class="box">Grid 5</div>
  </div>

</body>
</html>
```

### 📝 결과 요약

|display 종류 | 특징 요약|
|-------|------|
|block | 한 줄 전체 차지|
|inline | 내용만큼만 차지, 크기 조절 어려움|
|inline-block | inline처럼 나열되면서도 block처럼 크기 조절 가능|
|none | 화면에 표시 안 됨|
|flex | 가로 또는 세로로 정렬, 아주 유연함|
|grid | 격자 형태, 칸 나누기 편리|

## 2. Flexbox 기본 개념

> 복잡한 배치를 간단하게 만들 수 있는 마법 도구!

```css
.container {
  display: flex;
}
```

### 축 개념

- 주축(main axis): 기본 배치 방향
- 교차축(cross axis): 반대 방향



## 3. Flexbox 핵심 속성

### 📌 컨테이너에 적용

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
}
```

| 속성 | 설명 | 예시 |
|------|------|------|
| `flex-direction` | 배치 방향 | `row`, `column` |
| `justify-content` | 가로 정렬 | `flex-start`, `center`, `space-between` |
| `align-items` | 세로 정렬 | `stretch`, `center`, `flex-end` |
| `gap` | 간격 | `10px` 등 |



## 4. 실전 카드형 UI 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>CSS 3일차</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 30px;
      background: #f8f8f8;
    }

    .container {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 20px;
      width: 200px;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }

    .card h3 {
      margin-top: 0;
      color: #333;
    }

    .card p {
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>

  <h1>CSS 3일차: Flexbox 카드 배치</h1>

  <div class="container">
    <div class="card">
      <h3>HTML</h3>
      <p>웹의 구조를 만드는 언어</p>
    </div>
    <div class="card">
      <h3>CSS</h3>
      <p>스타일과 레이아웃을 담당</p>
    </div>
    <div class="card">
      <h3>JavaScript</h3>
      <p>웹을 동작하게 만드는 언어</p>
    </div>
  </div>

</body>
</html>
```



## 🎯 오늘의 정리

| 배운 개념 | 요약 |
|-----------|------|
| `display` | 요소의 기본 성질을 바꿈 |
| `flex` | 가로/세로 정렬이 간편해짐 |
| `justify-content` | 주축(가로) 정렬 |
| `align-items` | 교차축(세로) 정렬 |
| `gap` | 아이템 간 간격 조절 |

