# 🌐 HTML 주요 태그 정리 (예제 포함)

HTML에서 자주 사용하는 기본 태그들을 **용도 + 코드 예시**와 함께 정리한 참고용 사전입니다.


## ✅ 텍스트 관련

| 태그 | 용도 | 예시 |
|------|------|------|
| `<h1>` ~ `<h6>` | 제목 (1이 가장 큼) | `<h1>제목</h1>` |
| `<p>` | 문단 | `<p>이건 문단입니다</p>` |
| `<br>` | 줄바꿈 | `한 줄<br>두 줄` |
| `<hr>` | 수평선(구분선) | `<hr>` |
| `<strong>` | 굵게 + 의미 강조 | `<strong>중요</strong>` |
| `<em>` | 기울임 + 의미 강조 | `<em>강조</em>` |
| `<span>` | 인라인 영역 | `<span>강조 텍스트</span>` |



## ✅ 링크 및 미디어

| 태그 | 용도 | 예시 |
|------|------|------|
| `<a>` | 하이퍼링크 | `<a href="http://naver.com/">네이버</a>` |
| `<img>` | 이미지 삽입 | `<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />` |
| `<video>` | 비디오 삽입 | `<video controls src="video.mp4"></video>` |
| `<audio>` | 오디오 삽입 | `<audio controls src="audio.mp3"></audio>` |

## ✅ 입력 관련 (Form 요소)

| 태그 | 용도 | 예시 |
|------|------|------|
| `<input type="text">` | 한 줄 입력 | `<input type="text">` |
| `<input type="checkbox">` | 체크박스 | `<input type="checkbox"> 동의` |
| `<input type="radio">` | 라디오 버튼 | `<input type="radio" name="gender"> 남` |
| `<input type="submit">` | 제출 버튼 | `<input type="submit" value="보내기">` |
| `<textarea>` | 여러 줄 입력 | `<textarea rows="4" cols="30">내용</textarea>` |
| `<button>` | 일반 버튼 | `<button>버튼</button>` |
| `<label>` | 입력 제목 연결 | `<label for="name">이름</label><input id="name" type="text">` |
| `<select>` | 드롭다운 목록 | `<select><option>1</option><option>2</option></select>` |


## ✅ 구조 및 레이아웃

| 태그 | 용도 | 예시 |
|------|------|------|
| `<div>` | 블록 구역 묶음 | `<div>내용</div>` |
| `<span>` | 인라인 구역 묶음 | `<span>작은 강조</span>` |
| `<section>` | 의미 있는 구역 | `<section>콘텐츠 블록</section>` |
| `<article>` | 독립된 콘텐츠 | `<article>뉴스</article>` |
| `<header>` | 머리말 | `<header>로고</header>` |
| `<footer>` | 바닥글 | `<footer>ⓒ 2025</footer>` |
| `<nav>` | 내비게이션 | `<nav><a href="#">홈</a></nav>` |
| `<main>` | 주요 콘텐츠 | `<main>본문</main>` |
| `<aside>` | 부가 콘텐츠 | `<aside>광고</aside>` |


## ✅ 표 관련

| 태그 | 용도 | 예시 |
|------|------|------|
| `<table>` | 표 생성 | `<table><tr><td>내용</td></tr></table>` |
| `<tr>` | 행(Row) | `<tr>...</tr>` |
| `<td>` | 셀 데이터 | `<td>값</td>` |
| `<th>` | 제목 셀 | `<th>제목</th>` |
| `<thead>`, `<tbody>`, `<tfoot>` | 구역 나눔 | `<thead>...</thead>` 등 |

---

## ✅ 목록 관련

| 태그 | 용도 | 예시 |
|------|------|------|
| `<ul>` | 순서 없는 목록 | `<ul><li>항목</li></ul>` |
| `<ol>` | 순서 있는 목록 | `<ol><li>1번</li></ol>` |
| `<li>` | 리스트 항목 | `<li>항목</li>` |
| `<dl>` | 정의 목록 | `<dl><dt>단어</dt><dd>설명</dd></dl>` |


## ✅ 메타 및 기타

| 태그 | 용도 | 예시 |
|------|------|------|
| `<meta>` | 문자 인코딩 등 | `<meta charset="UTF-8">` |
| `<title>` | 문서 제목 | `<title>내 문서</title>` |
| `<link>` | 외부 CSS 연결 | `<link rel="stylesheet" href="style.css">` |
| `<script>` | JS 삽입 | `<script src="app.js"></script>` |

