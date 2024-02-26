package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FullStackSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullStackSpringApplication.class, args);
		System.out.println("These is Full Stack web app using springBoot and ReactJS");
	}

}
