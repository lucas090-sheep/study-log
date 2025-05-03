
# 🎨 CSS 기본 명령어 정리 (스타일 속성)

CSS는 HTML 요소의 **색상, 크기, 위치, 간격** 등을 제어할 수 있다.  
아래는 자주 쓰는 **기본 속성들**과 예시들이다.


## ✅ 1. 색상 (color, background-color)

| 속성 | 설명 | 예시 |
|------|------|------|
| `color` | 글자 색 | `color: red;`, `color: #ff0000;`, `color: rgb(255,0,0);` |
| `background-color` | 배경색 | `background-color: yellow;` |


## ✅ 2. 글꼴 관련

| 속성 | 설명 | 예시 |
|------|------|------|
| `font-size` | 글자 크기 | `font-size: 16px;`, `font-size: 1.2em;` |
| `font-weight` | 굵기 | `normal`, `bold`, `400~900` |
| `font-style` | 기울임 | `italic`, `normal` |
| `font-family` | 글꼴 | `font-family: 'Arial', sans-serif;` |
| `line-height` | 줄 간격 | `line-height: 1.6;` |

## ✅ 3. 정렬 관련

| 속성 | 설명 | 예시 |
|------|------|------|
| `text-align` | 글자 정렬 | `left`, `center`, `right` |
| `vertical-align` | 세로 정렬 (inline 요소에서) | `top`, `middle`, `bottom` |

## ✅ 4. 여백 (margin, padding)

| 속성 | 설명 | 예시 |
|------|------|------|
| `margin` | 바깥 여백 | `margin: 20px;` (상하좌우) |
| `padding` | 안쪽 여백 | `padding: 10px 20px;` (상하 10, 좌우 20) |


## ✅ 5. 박스 및 테두리

| 속성 | 설명 | 예시 |
|------|------|------|
| `width`, `height` | 너비와 높이 | `width: 200px;`, `height: auto;` |
| `border` | 테두리 | `border: 1px solid black;` |
| `border-radius` | 모서리 둥글게 | `border-radius: 10px;` |
| `box-shadow` | 그림자 효과 | `box-shadow: 2px 2px 8px rgba(0,0,0,0.2);` |

## ✅ 6. 배치 관련 (정렬 및 위치)

| 속성 | 설명 | 예시 |
|------|------|------|
| `display` | 요소 유형 지정 | `block`, `inline`, `flex`, `grid`, `none` |
| `position` | 위치 방식 | `static`, `relative`, `absolute`, `fixed` |
| `top`, `left` 등 | 위치 조정 | `top: 10px;`, `left: 20px;` (position 있어야 작동) |


## ✅ 7. 배경 이미지

```css
background-image: url("배경.jpg");
background-size: cover;
background-position: center;
```


## ✅ 8. 커서 및 기타

| 속성 | 설명 | 예시 |
|------|------|------|
| `cursor` | 마우스 커서 형태 | `cursor: pointer;` (버튼처럼 손모양) |
| `opacity` | 투명도 | `opacity: 0.5;` |
| `transition` | 부드러운 변화 | `transition: all 0.3s ease;` |


## ✨ 단위 정리

| 단위 | 의미 | 예시 |
|------|------|------|
| `px` | 픽셀 (고정 크기) | `16px` |
| `em`, `rem` | 상대 크기 | `1.5em`, `1rem` |
| `%` | 부모 기준 비율 | `width: 50%` |
| `vh`, `vw` | 뷰포트 비율 | `100vh`, `100vw` |


