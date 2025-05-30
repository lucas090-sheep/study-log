
HTML 사용법  
==  

HTML은 웹페이지의 **기초 뼈대**를 구성하는 마크업 언어다.  
이 문서는 HTML의 기본 구조와 핵심 태그를 정리한 것이다.


## 📚 목차  
1. [HTML 기본 구조](#html-기본-구조)  
2. [`<head>` 안의 필수 태그](#head-안의-필수-태그)  
3. [`<body>` 안의 내용 구조](#body-안의-내용-구조)  
4. [실습용 코드 예제](#실습용-코드-예제)


## HTML 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>나의 첫 웹페이지</title>
</head>
<body>
  <!-- 여기 안이 실제로 웹사이트에 보이는 부분이야 -->
</body>
</html>
```

| 태그 | 설명 |
|------|------|
| `<!DOCTYPE html>` | HTML5 문서임을 선언 |
| `<html lang="ko">` | 문서 전체를 감싸며, `lang="ko"`는 한국어 문서라는 의미 |
| `<head>` | 브라우저에는 안 보이지만 중요한 정보들이 들어감 |
| `<body>` | 우리가 실제로 **웹페이지에서 보는 부분** |



## `<head>` 안의 필수 태그

`<head>` 안에는 문서 정보, 문자 인코딩, 제목 등 여러 메타 정보가 들어간다.

###  `<meta charset="UTF-8">`

> 문서의 문자 인코딩을 UTF-8로 지정  
> 한글을 포함한 **모든 언어를 정상 표시**할 수 있는 국제 표준 문자 인코딩 방식  

만약 이 태그가 없으면 한글이 깨질 수 있다.

###  `<title>`

> 브라우저 탭에 뜨는 제목  
> 검색 결과 제목으로도 활용됨

```html
<title>나의 첫 웹페이지</title>
```



## `<body>` 안의 내용 구조

`<body>`는 사용자가 실제로 보는 내용이 들어가는 부분이다.

```html
<body>
  <h1>환영합니다!</h1>
  <p>본문 내용입니다.</p>
</body>
```

| 태그 | 설명 |
|------|------|
| `<h1> ~ <h6>` | 제목 (숫자가 커질수록 글자는 작아짐) |
| `<p>` | 문단(paragraph) |
| `<a href="url">` | 하이퍼링크 |
| `<img src="이미지주소">` | 이미지 삽입 |



## 실습용 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>나의 첫 HTML 문서</title>
</head>
<body>
  <h1>안녕하세요</h1>
  <p>HTML 코드에요~</p>
</body>
</html>
```



##  마무리

- HTML 문서는 항상 `<!DOCTYPE html>`로 시작
- `<head>`에는 보이지 않는 정보들이, `<body>`에는 사용자에게 보이는 내용이 들어간다
- `<meta charset="UTF-8">`은 한글 깨짐 방지를 위해 꼭 필요
