# Style Trouble Shooting

## [2026-07-14] h1 ~ h5 태그 스타일 설정 중 `tracking-tight` 의미

### 문제 상황 & 원인

- Tailwind로 `h1`~`h5` 태그 스타일을 정의하는 과정에서 `tracking-tight` 클래스를 사용했는데, 정확히 어떤 역할을 하는지 몰랐음

### 해결 & 배운 점

- `tracking-tight`는 폰트 크기가 큰 경우 글자 사이의 여백이 상대적으로 넓어 보이는 현상을 보정하기 위해 사용하는 속성

## [2026-07-14] npm 패키지로 폰트 추가하는 방법

### 문제 상황 & 원인

- `index.css`의 폰트를 설정하는 과정에서 Pretendard 폰트로 폰트를 설정하려고 했는데 어떻게 설정해야 하는지 몰랐음

### 해결

- 프로젝트에 폰트를 축하는 방법은 기본적으로 두 가지가 있는데 방법1은 CDN을 사용하여 추가하는 것이고 방법 2는 npm 패키지를 이용하여 폰트를 추가하는 방법임.
- CDN 사용은 네트워크 연결이 없으면 폰트에 대한 정보를 받아올 수 없어 방법2 npm 패키지를 이용하여 프로젝트에 폰트를 추가하기로 함

### 배운 점 (npm 패키지를 이용하여 프로젝트에 폰트를 추가하는 방법)

- [github 참고](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/README.md)

1. npm으로 폰트 패키지 설치

   ```bash
   pnpm add pretendard
   ```

2. `index.css` 수정 (최상단에 입력할 것)

   ```css
   @import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
   ```

3. `:root`에 추가

   ```css
   :root {
     /* 동일 환경을 제공하기 위한 font-family 설정 */
     font-family:
       "Pretendard Variable",
       Pretendard,
       -apple-system,
       BlinkMacSystemFont,
       system-ui,
       Roboto,
       "Helvetica Neue",
       "Segoe UI",
       "Apple SD Gothic Neo",
       "Noto Sans KR",
       "Malgun Gothic",
       "Apple Color Emoji",
       "Segoe UI Emoji",
       "Segoe UI Symbol",
       sans-serif;
   }
   ```
