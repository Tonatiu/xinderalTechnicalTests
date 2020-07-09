package com.xideral.tona.chat.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import com.xideral.tona.chat.dto.MessageDTO;
import com.xideral.tona.chat.service.MessageService;

@Controller
public class ChatController {
	@Autowired
	@Qualifier("messageService")
	private MessageService messageService;
	
	@MessageMapping("/chat.register")
	@SendTo("/topic/public")
	public MessageDTO register(@Payload MessageDTO message, SimpMessageHeaderAccessor headerAccesor) {
		headerAccesor.getSessionAttributes().put("uname", message.getUname());
		message.setMessage_date(new Date());
		messageService.save(message);
		return message;
	}
	
	@MessageMapping("/chat.send")
	@SendTo("/topic/public")
	public MessageDTO sendMessage(@Payload MessageDTO message) {
		message.setMessage_date(new Date());
		messageService.save(message);
		return message;
	}
}
