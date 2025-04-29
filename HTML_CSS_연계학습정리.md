
# 🎨 HTML과 CSS 연계 학습 정리


## ✅ 목표
HTML로 뼈대를 만들고, CSS로 스타일을 입혀서 완성된 웹페이지를 만든다.


## 1. HTML 기본 구조 만들기

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>나의 소개</title>
  <link rel="stylesheet" href="style.css"> <!-- 외부 CSS 파일 연결 -->
</head>
<body>
  <header>
    <h1>안녕하세요! 저는 안준입니다</h1>
  </header>

  <section>
    <h2> 관심 분야</h2>
    <ul>
      <li>웹 개발</li>
      <li>게임 개발</li>
      <li>UI 디자인</li>
    </ul>
  </section>

  <section>
    <h2>✨ 목표</h2>
    <p>HTML과 CSS를 완벽하게 연결하는 것!</p>
  </section>

  <footer>
    <small>© 2025 Github All rights reserved.</small>
  </footer>
</body>
</html>
```



## 2. CSS 파일 작성 (style.css)

```css
/* 전체 기본 스타일 */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f8ff;
  color: #333;
  margin: 0;
  padding: 20px;
}

/* 헤더 스타일 */
header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

/* 섹션 제목 스타일 */
h2 {
  color: #ff5722;
}

/* 리스트 스타일 */
ul {
  list-style-type: square;
  padding-left: 20px;
}

/* 푸터 스타일 */
footer {
  margin-top: 40px;
  text-align: center;
  font-size: 12px;
  color: gray;
}
```


## 3. HTML과 CSS 연결 방법 요약

| 방법 | 특징 | 예시 |
|------|------|------|
| 인라인 스타일 | HTML 요소 안에 직접 스타일 적용 | `<p style="color:red;">텍스트</p>` |
| 내부 스타일 | `<style>` 태그 안에 작성 | `<style> p { color:blue; }</style>` |
| 외부 스타일 | `.css` 파일로 따로 만들어서 연결 | `<link rel="stylesheet" href="style.css">` |

✅ **실제 웹페이지 제작에서는 외부 스타일시트를 사용하는 것이 표준이다.**


## ✨ 요약

- HTML로 구조를 만들고 CSS로 디자인을 입힌다.
- 외부 CSS 파일을 연결하면 관리가 쉽고 깔끔해진다.
- 시맨틱 태그를 사용해 구조적이고 의미 있는 웹페이지를 만든다.


# 🎯 한 줄 요약
> **HTML로 뼈대를 만들고, CSS로 생명을 불어넣자!** 🎨
