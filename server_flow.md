# 서버 연결 구조

## 전체흐름
```scc
클라이언트 (웹 브라우저)
        ↓
     Nginx (80 포트)
        ↓
   Flask (5000 포트)
        ↓
   MongoDB (NoSQL 데이터베이스)

```

## 각 구성 요소의 역할
### 클라이언트 (웹 브라우저)
- 사용자는 웹 브라우저에서 사이트에 접속.
- HTML, CSS, JavaScript 파일이 로드되고, JavaScript가 Flask 서버와 통신하여 메모를 저장, 불러오기, 수정, 삭제 수행.

---

### Nginx (웹 서버)
- Nginx는 정적 파일 (HTML, CSS, JS)을 직접 제공하고, 동적 요청을 Flask 서버로 전달.
- 클라이언트가 웹 브라우저에서 요청하면, Nginx는 이를 받아 정적 파일은 직접 제공하고, 동적 API 요청은 Flask로 전달.

#### Nginx의 역할

1. 정적 파일 제공:
   - HTML, CSS, JavaScript 파일을 클라이언트에게 직접 전달하여 빠르게 로드.
   - 예: 클라이언트가 페이지를 로드할 때 Nginx가 직접 HTML, CSS, JS 파일을 전달.

2. 리버스 프록시 (동적 요청 처리):
   - 클라이언트가 메모 저장, 불러오기 요청을 보낼 때 Nginx가 Flask 서버로 전달.
   - 클라이언트는 Nginx와만 통신하며, Flask 서버는 직접 노출되지 않음.

#### Nginx 동작 방식
- 클라이언트가 HTTP 요청을 보내면
- Nginx가 정적 파일 (HTML, CSS, JS)을 클라이언트에게 직접 전달.
- 동적 요청 (메모 저장, 불러오기)은 Flask 서버로 전달 (5000 포트).

---

### Flask (웹 애플리케이션 서버)
- Flask란?
   - Python으로 구현된 웹 애플리케이션 프레임워크.
   - 웹 페이지에서 사용자 요청 (메모 저장, 불러오기 등)을 처리.
   - Flask는 HTTP API (Application Programming Interface)로 클라이언트와 통신.

#### Flask의 역할
- 클라이언트가 JavaScript로 서버에 메모 저장 요청을 보내면 Flask가 이를 처리
   - 저장: `/memo` (POST)
   - 불러오기: `/memo` (GET)
   - 좋아요: `/like` (POST)
   - 삭제: `/delete` (POST) 