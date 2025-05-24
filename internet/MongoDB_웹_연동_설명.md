
# MongoDB와 웹 애플리케이션의 상호작용 구조 설명

## ✅ MongoDB란?
- **MongoDB**는 문서(document) 기반의 NoSQL 데이터베이스입니다.
- 데이터를 테이블이 아닌 JSON과 유사한 **BSON(Binary JSON)** 형식의 문서로 저장합니다.
- 관계형 데이터베이스(RDBMS)보다 유연하며, 스키마가 고정되어 있지 않아 변경이 쉬움.

---

## ✅ MongoDB 기본 개념

| 용어        | 의미 및 설명 |
|-------------|---------------|
| 데이터베이스 (Database) | 여러 개의 컬렉션(테이블과 유사)을 포함하는 최상위 단위 |
| 컬렉션 (Collection) | 관련 문서들을 모은 그룹 (테이블과 유사) |
| 문서 (Document) | JSON과 유사한 key-value 쌍으로 이루어진 데이터 단위 |
| 필드 (Field) | 문서 내의 key (열 이름에 해당) |

---

## ✅ Flask와 MongoDB 연동

Flask는 `pymongo`라는 Python 라이브러리를 통해 MongoDB와 연결합니다.

### 📌 연결 예시
```python
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')
db = client.dbjungle  # 데이터베이스 선택
collection = db.memos  # 컬렉션 선택
```

---

## ✅ 클라이언트와 MongoDB의 간접 상호작용 흐름

```
[클라이언트 (웹 브라우저)]
    ↕ JavaScript (AJAX 요청)
[Flask 서버 (Python)]
    ↕ pymongo
[MongoDB 서버]
```

### 📌 과정 설명
1. 클라이언트가 입력한 데이터를 JavaScript가 AJAX 요청으로 Flask 서버에 전달
2. Flask는 이 요청을 받아 `pymongo`를 통해 MongoDB에 저장하거나 조회
3. MongoDB는 해당 작업을 수행 후 Flask에 응답
4. Flask는 결과를 다시 JSON 형식으로 클라이언트에 반환
5. 클라이언트가 결과를 화면에 렌더링

---

## ✅ 데이터 저장 예시 (클라이언트 → MongoDB)

### 🔹 클라이언트 (JavaScript)
```javascript
fetch('/memo', {
  method: 'POST',
  body: new URLSearchParams({ title: '제목', content: '내용' })
});
```

### 🔹 Flask 서버
```python
@app.route('/memo', methods=['POST'])
def save_memo():
    title = request.form['title']
    content = request.form['content']
    db.memos.insert_one({'title': title, 'content': content, 'likes': 0})
    return jsonify({'result': 'success'})
```

### 🔹 MongoDB 저장 결과 (예)
```json
{
  "title": "제목",
  "content": "내용",
  "likes": 0
}
```

---

## ✅ 데이터 조회 예시 (MongoDB → 클라이언트)

### 🔹 Flask 서버
```python
@app.route('/memo', methods=['GET'])
def load_memos():
    memos = list(db.memos.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'memos': memos})
```

### 🔹 클라이언트 (JavaScript)
```javascript
const res = await fetch('/memo');
const data = await res.json();
console.log(data.memos);  // 메모 목록 출력
```

---

## ✅ MongoDB의 장점

- 스키마가 유연함 (필드 추가/삭제 자유로움)
- JSON 형식으로 웹과 잘 어울림
- 대량 데이터 저장에 적합
- 샤딩, 복제 등으로 확장성과 안정성 확보 가능

---

## ✅ MongoDB의 단점

- 복잡한 JOIN이 필요한 관계형 데이터에 적합하지 않음
- 트랜잭션이 제한적 (버전 4.0부터 개선됨)

---

## ✅ 결론

MongoDB는 웹 프론트엔드(JavaScript)와 백엔드(Flask) 사이에서  
**pymongo를 통해 중개자 역할을 하는 Flask 서버와 함께 작동**합니다.  
클라이언트는 MongoDB와 직접 통신하지 않으며, Flask를 통해 간접적으로 데이터 저장/조회 요청을 보냅니다.
