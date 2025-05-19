
# 🌐 GitHub 파일 업로드: 두 가지 방법 (간결한 정리)


## ✅ 파일 업로드 방식 비교

| 업로드 방식 | 특징 | 장점 | 단점 |
|--------------|------|------|------|
| **직접 파일 업로드 (Drag & Drop)** | GitHub 웹에서 바로 파일 추가 | 빠르고 간단 | 파일 변경 기록 없음 |
| **Git 사용 (Push)** | 로컬에서 Git으로 파일 관리 | 버전 기록, 협업, 복구 가능 | 초기 설정이 필요 |

---

## ✅ 1. 직접 파일 업로드 (Drag & Drop)

### 📌 방법
1. GitHub 저장소 페이지로 이동
2. 우측 상단의 **`Add file > Upload files`** 클릭
3. 파일을 드래그해서 업로드
4. **Commit changes** 버튼 클릭 (변경 사항 저장)

### ✅ 장점
- 빠르고 간단 (초보자에게 적합)
- 코드 수정 없이 바로 파일 업로드 가능

### ❌ 단점
- 파일 변경 기록이 남지 않음 (버전 관리 X)
- 실수로 파일 덮어쓰기 가능
- 파일 버전을 관리하거나 협업하기 어려움


## ✅ 2. Git 사용 (Push) - 버전 관리
Git을 사용하면 파일 변경 기록을 남기고, 여러 버전을 관리할 수 있음.  
- **버전 기록:** 언제, 누가, 무엇을 수정했는지 추적 가능 (`git log`)
- **복구 가능:** 이전 버전으로 쉽게 되돌리기 (`git checkout`)
- **협업 지원:** 여러 개발자가 동시에 작업할 수 있음 (Pull Request)
- **GitHub Pages로 웹사이트 호스팅 가능**

### 📌 Git 사용하기: 로컬에서 Git으로 파일 업로드
1. 로컬에서 프로젝트 폴더 생성 (예: `my_project`)
```bash
mkdir my_project
cd my_project
```

2. Git 초기화 (버전 관리 시작)
```bash
git init
```

3. 파일 추가 및 첫 커밋 (버전 기록)
```bash
echo "<h1>Hello World</h1>" > index.html
git add .
git commit -m "첫 파일 추가"
```

4. GitHub 원격 저장소 연결 (로컬 ↔ GitHub 연결)
```bash
git remote add origin https://github.com/username/my_project.git
```

5. GitHub에 파일 업로드 (Push)
```bash
git branch -M main
git push -u origin main
```

### ✅ Git 명령어 간결 정리
| 명령어 | 설명 |
|---------|------|
| `git init` | 현재 폴더를 Git 저장소로 초기화 |
| `git add .` | 모든 파일 추가 (커밋 준비) |
| `git commit -m "메시지"` | 파일 변경 기록 (버전 기록) |
| `git remote add origin URL` | 원격 저장소(GitHub) 연결 |
| `git push` | 로컬 파일을 GitHub에 업로드 |

---

## ✅ 왜 Git을 사용하는가?
- **변경 기록 관리:** 파일 수정 내역 확인 가능 (`git log`)
- **복구 가능:** 실수 시 이전 버전으로 되돌리기 (`git checkout`)
- **협업 가능:** 브랜치(Branch)로 각자 작업 후 병합 (Pull Request)
- **GitHub Pages로 웹사이트 호스팅:** HTML/CSS/JS 프로젝트를 웹에 바로 공개 가능

## ✅ 실전 팁
- Git은 소스 코드의 **버전 관리 도구**로, 코드 변경 내역을 자동으로 기록
- 브랜치를 사용하면 실험적 코드와 안정된 코드를 구분 가능
- 협업 시 각자 작업 후 Pull Request로 안전하게 코드 병합
- GitHub Pages로 바로 웹사이트를 공개할 수 있어 웹 배포도 간단

