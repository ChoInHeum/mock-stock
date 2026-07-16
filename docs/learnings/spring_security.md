# Spring Security 설정 파일

### 전체 코드

```java
package com.mockstock.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration          // 이 클래스가 Bean 정의를 담은 설정 클래스임을 spring에게 알림. @Bean 메서드들이 컨테이너에 등록됨
@EnableWebSecurity      // Spring Security의 웹 보안 기능을 활성화하고, 우리가 정의한 SecurityFilterChain으로 기본 설정을 대체하는 선언
public class SecurityConfig {
    //

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .formLogin(AbstractHttpConfigurer::disable)
            .httpBasic(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/health").permitAll()
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated());

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);

        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

```

## 코드 설명

### 클래스 선언부

- `@Bean`: Bean은 Spring이 대신 만들어서 보관하고, 필요한 곳에 꽂아주는 객체임.
- `@Configuration`: 이 클래스가 `Bean` 정의를 담은 설정 클래스임을 Spring을 알림. 안의 `@Bean` 메서드들이 애플리케이션 컨텍스트에 등록됨.
- `@EnableWebSecurity`: Spring Security의 웹 보안 기능을 활성화하고, 정의한 `SecurityFilterChain`으로 기본 설정을 대체하겠다는 선언임.

### filterChain 메서드

- `public SecurityFilterChain filterChain(HttpSecurity http)`: 모든 HTTP 요청이 통과할 보안 필터 체인을 조립하는 메서드. `HttpSecurity`는 그 조립용 빌더로 Spring이 주입해줌.
- `.cors(Customizer.withDefaults())`: Security 필터 단계에서 CORS를 처리하도록 킴. "기본 방식으로 설정을 찾아라"는 뜻인데, 그 기본 방식이 애플리케이션 컨텍스트에서 `CorsConfigurationSource` Bean을 찾는 것이라 아래 정의한 Bean이 자동으로 연결됨.
- `.csrf(AbstractHttpConfigurer::disable)`: CSRF 보호를 끔. CSRF는 브라우저가 세션 쿠키를 자동 전송하는 걸 악용하는 공격인데, 현재 프로젝트에서는 세션 없이 jwt를 헤더로 직접 보낼 것이므로 공격 자체가 성립하지 않아 끔.
- `sessionManagment(... STATELESS)`: 서버가 세션을 생성하지도, 기존 세션을 사용하지도 않게 함. 인증 상태는 매 요청마다 JWT로 새로 판별하겠다는 stateless 선언임.
- `formLogin(AbstractHttpConfigurer::disable)`: HTTP Basic 인증 (브라우저 아이디/비밀번호 팝업)을 끔. 우리는 REST API라 로그인도 JSON API로 직접 만들기 때문임.
- `authorizeHttpsRequests(auth -> ...)`: URL별 접근 규칙을 담을 객체를 만듬.
  - `.requestMatchers("api/health").permitAll()`: 헬스체크는 인증 없이 누구나 접근 가능.
  - `.requestMatchers("api/auth/**").permitAll()`: 회원가입/로그인 API는 토큰이 없는 사용자 쓰는 것이므로 열어둠.
  - `.anyRequest().authenticate()`: 위에서 매치되지 않은 나머지 요청은 인증 필요. 규칙은 **위에서부터 순서대로** 평가되므로 구체적인 경로를 먼저, 포괄 규칙을 마지막에 둠.
- `return http.build();`: 지금까지의 설정으로 필터 체인 객체를 생성해 Bean으로 반환함.

### corsConfigurationSource 메서드

- `CorsConfiguration config = new CorsConfiguration();`: CORS 허용 규칙을 담을 객체를 만듬.
- `.setAllowedOrigins(List.of("http://localhost:5173"))`: 이 origin에서 온 요청만 허용함. 브라우저는 프로토콜 + 호스트 + 포트가 전부 일치해야 같은 origin으로 봄.
- `.setAllowedMethods(...)`: 허용할 HTTP 메서드 목록. 프리플라이트 요청이 이 목록과 대조됨.
- `.setAllowedHeaders(List.of("*"))`: 프론트가 보낼 수 있는 요청 헤더를 제한하지 않음. 나중에 JWT를 담을 `Authorization` 헤더로 여기에 걸리므로 `*`로 엶.
- `.setAllowCredentials(true)`: 쿠키나 인증 정보가 포함된 요청을 허용함. 이 옵션이 켜져 있으면 origin에 `*`를 쓸 수 없어서 위에서 주소를 명시한 것
- `UrlBasedCorsConfigurationSource source = ...` / `registerCorsConfiguration("/api/**, config)`: 위 규칙을 "어떤 URL패턴에 적용할지" 매핑함. `/api/` 하위 경로에만 적용함.
- `return source;`: 이 Bean을 `.cors(Customizer.withDefaults())`가 찾아서 사용함.

### passwordEncoder 메서드

- `return new BCryptPasswordEncoder();`: 비밀번호 해싱기를 Bean으로 등록함. BCrypt는 같은 비밀번호라도 매번 다른 해시를 만들고(salt 내장), 의도적으로 느리게 설계되어 무차별 대입 공격에 강함. 회원가입 구현 때 `passwordEncoder.encode(rawPassword)`로 바로 쓰게 됨.
