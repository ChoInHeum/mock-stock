# Git Commit Convention

``` bash
<타입>(<범위>): <제목>
```

### 타입 목록

| 타입 | 용도 |
| --- | --- |
| `feat` | 새 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `refactor` | 리팩토링 (기눙 변화 없이 구조 개선) |
| `test` | 테스트 코드 추가/수정 |
| `chore` | 빌드 설정, 패키지 매니저 등 잡무 |
| `perf` | 성능 개선 |
| `ci` | CI/CD 설정 변경 |

### 범위(scope) - front/back 구분
풀스택 프로젝트이므로 범위로 작업 영역을 구분한다. 한 번 정한 이름은 계속 동일하게 사용한다.

| 범위 | 대상 |
| --- | --- |
| `front` | frontend (UI, Page, Component, etc.) |
| `back` | backend (API, DB, Server Logic, etc.) |

### 제목 작성 규칙
- 50자 이내로 간결하게
- 마침표 없이 끝내기
- 명령형으로 쓰기 - "추가함"이 아니라 "추가"
- 언어는 영어로 통일

### 커밋 작성 규칙
1. **하나의 커밋 = 하나의 논리적 변경**. 기능 추가와 버그 수정을 한 커밋에 섞지 않는다.
2. **프론트와 백엔드 변경은 커밋을 분리한다.**

``` bash
git add server/
git commit -m "feat(back): implement login API"

git add client/
git commit -m "feat(front): connect login page to API"
```

### 브런치 & 버전 관리
- 브런치 전략: `main` + `dev` + 기능별 `feat/기능명` 브런치
- 배포 시점마다 버전 태그를 단다: `v1.0.0`, `v1.1.0`
    - `feat` -> 마이너 버전 업 (`v1.0.0` -> `1.1.0`)
    - `fix` -> 패치 버전 업 (`v1.0.0` -> `v1.0.1`)