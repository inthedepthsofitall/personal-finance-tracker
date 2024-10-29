package com.andrewsalas.finance;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @SuppressWarnings("removal")
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors() // Enable CORS
            .and()
            .authorizeHttpRequests()
            .requestMatchers("/admin/**").hasRole("ADMIN") // Admin endpoints
            .requestMatchers("/api/**").authenticated() // Protect API endpoints
            .requestMatchers("/**").hasRole("USER") // Other endpoints for USER role
            .and()
            .formLogin(); // Enable form-based login
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        User.UserBuilder users = User.withUsername("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER");
        return new InMemoryUserDetailsManager(users.build());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
