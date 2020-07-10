package com.xideral.tona.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ChatRoomApplication extends SpringBootServletInitializer{
	 @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ChatRoomApplication.class);
    }
	 
	public static void main(String[] args) {
		SpringApplication.run(ChatRoomApplication.class, args);
	}

}
