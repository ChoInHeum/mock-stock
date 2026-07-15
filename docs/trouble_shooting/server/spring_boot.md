# Spring Boot Trouble Shooting

## [2026-07-15] Spring boot 프로젝트 생성 방법

### 문제 상황 & 원인

- Spring Boot 프로젝트를 생성하는 방법을 모름

### 해결 & 배운 점

#### Spring boot 프로젝트 생성

1. [spring initializr](https://start.spring.io/)에 접속

2. **Project**: 빌드 도구 선택 및 빌드 스크립트 작성 언어 선택
   - `Gradle - Groovy`: 빌드느 도구는 **Gradle**, 빌드 스크립트를 **Groovy 언어**로 작성하는 방식. **(선택)**
   - `Gradle - Kotlin`: 빌드는 도구는 **Gradle**, 빌드 스크립트를 **Kotlin 언어**로 작성하는 방식
   - `Maven`: **Gradle**보다 더 오래된 빌드 도구로, 설정을 **XML**로 작성하는 방식

3. **Language**: 언어 선택
   - `Java` **(선택)**
   - `Kotlin`
   - `Groovy`

4. **Spring Boot**: 버전 선택
   - `4.1.1 (SANPSHOT)`
   - `4.1.0` **(선택)**
   - `4.0.8 (SNAPSHOT)`
   - `4.0.7`

5. **Project Metadata**: 프로젝트 정보 입력
   - `Group`: com.companyname
   - `Artifact`: name
   - `Package name` (auto): com.companyname.name
   - `Packaging`
     - `jar` **(선택)**
     - `war`
   - `Configuration`: 프로젝트 설정 파일 확장자 선택
     - `Properties`: 일반적인 `propoerty=value`형식으로 YAML보다 우선순위가 높음
     - `YAML`: `Property: value`로 앞 공백 2개를 기준으로 계층적으로 입력 **(선택)**
   - `Java`: JDK 버전
     - `21` **(선택)**

6. **Dependencies**: 프로젝트 초기화 시 추가할 의존성 추가
   - 추가한 의존성
     - `Spring Web`: REST API의 핵심으로, 내장 Tomcat 서버, `@RestController`, `@GetMapping` 같은 어노테이션, JSON 직렬화(Jackson) 등을 지원하는 의존성
     - `Spring Data JPA`: DB 연동 계층. 엔티티 클래스를 정의하고 Repository 인터페이스만 만들면 기본 CRUD가 자동으로 생기는 등을 지원하는 의존성
     - `Validation`: 요청 DTO에 `@NotNull`, `@Min`, `@Email` 같은 어노테이션으로 입력 검증을 선언적으로 처리 등을 지원하는 의존성
     - `Lombok`: `@Getter`, `@Builder`, `RequiredArgsConstructor` 등으로 보일프렝이트를 줄여주는 의존성
     - `Spring Boot Dev Tools`: 코드 수정 시 자동으로 재시작 해주는 의존성
     - `PostgreSQL Driver`: PostgrelSQL 사용을 위한 의존성

7. **Generate** 버튼 클릭 후 Zip파일 다운 후 프로젝트에 풀어넣기
