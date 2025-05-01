
# 📚 HTML과 CSS 연결 이론 정리


## ✅ 왜 HTML과 CSS를 연결해야 할까?

- HTML: 구조만 제공 (뼈대 역할)
- CSS: 스타일과 모양 제공 (색상, 정렬, 여백 등)
- 둘을 **같이 써야 실제 웹사이트처럼 보기 좋고 기능적인 웹페이지 완성!**


## 🔗 HTML + CSS 연결 방법 3가지

| 방법 | 설명 | 예시 |
|------|------|------|
| 인라인 스타일 | 태그 안에서 바로 적용 | `<p style="color:red;">텍스트</p>` |
| 내부 스타일 | `<style>` 태그 안에 CSS 작성 | `<style> p { color:blue; }</style>` |
| 외부 스타일 | HTML에 `.css` 파일을 연결 | `<link rel="stylesheet" href="style.css">` |

✅ 실무에서는 **외부 스타일시트** 방식을 가장 많이 사용한다.


## 🏷️ 외부 스타일 연결 태그 분석

```html
<link rel="stylesheet" href="style.css">
```

| 속성 | 설명 |
|------|------|
| `link` | 외부 파일 연결용 태그 |
| `rel="stylesheet"` | 연결할 파일이 스타일시트라는 의미 |
| `href="style.css"` | 연결할 CSS 파일 이름 또는 경로 |

- 반드시 `<head>` 태그 안에 작성해야 한다.


## 🗂 파일 구조 예시

```
/project-folder/
│
├── index.html
├── style.css
└── images/
```

- `index.html`과 `style.css`가 같은 폴더에 있을 경우:
  ```html
  <link rel="stylesheet" href="style.css">
  ```

- CSS가 `css` 폴더에 있다면:
  ```html
  <link rel="stylesheet" href="css/style.css">
  ```


## ✨ 각 방식 장단점 비교

| 방식 | 장점 | 단점 | 추천도 |
|------|------|------|--------|
| 인라인 | 빠른 테스트 | 유지보수 어려움 | ❌ |
| 내부 스타일 | 한 파일에 다 있음 | 길어지면 복잡 | 🔸 연습용 |
| 외부 스타일 | 재사용 가능, 깔끔함 | 경로 주의 필요 | ✅ 실무 표준 |


## 💡 핵심 요약 5줄

1. HTML은 구조, CSS는 스타일
2. 외부 스타일은 `<link rel="stylesheet" href="파일명.css">`로 연결
3. 연결 코드는 반드시 `<head>` 안에 작성
4. CSS 파일과 HTML 파일의 **경로를 맞춰야 적용됨**
5. 실무에서는 항상 외부 스타일시트를 사용


# 🎯 한 문장 요약

> **CSS는 HTML에 생명을 불어넣는 마법이다!**
