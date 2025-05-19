# Nginx 서버 설명

## ✅ Nginx란?
- **Nginx** (Engine-X)는 고성능 웹 서버로, 정적 파일(HTML, CSS, JS) 제공과 리버스 프록시(Reverse Proxy) 역할을 수행할 수 있습니다.
- 경량화된 서버로 높은 성능을 제공하며, 전 세계적으로 많이 사용되는 웹 서버 중 하나입니다.

---

## ✅ Nginx의 주요 특징
1. **정적 파일 제공**
   - HTML, CSS, JavaScript, 이미지 파일 등을 클라이언트에게 직접 전달.
   - 정적 파일 로드 속도가 빠르며, 서버 부하를 줄일 수 있습니다.

2. **리버스 프록시 (Reverse Proxy)**
   - 클라이언트 요청을 받아 **백엔드 서버 (Flask, Node.js, Django 등)** 로 전달.
   - 서버 부하 분산 (로드 밸런싱) 가능.

3. **로드 밸런싱**
   - 다중 서버에 트래픽을 분산하여 성능을 향상.
   - 라운드 로빈, IP 해시, 최소 연결 방식 등 다양한 방식 지원.

4. **SSL/TLS 암호화**
   - HTTPS 통신을 통해 클라이언트와 서버 간의 데이터를 안전하게 보호.
   - SSL 인증서를 설정하여 HTTPS 적용 가능.

---

## ✅ Nginx 설치 및 설정
### 📌 설치 (Ubuntu)
```bash
sudo apt update
sudo apt install nginx -y
