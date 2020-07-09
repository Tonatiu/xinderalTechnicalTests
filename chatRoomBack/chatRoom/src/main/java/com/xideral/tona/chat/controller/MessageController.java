package com.xideral.tona.chat.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xideral.tona.chat.dto.MessageDTO;
import com.xideral.tona.chat.service.MessageService;

@RestController
@RequestMapping("/chatRoom")
public class MessageController {
	@Autowired
	@Qualifier("messageService")
	private MessageService messageService;
	
	@PutMapping("/message")
	public void addMessage(@RequestBody @Validated MessageDTO message) {
		message.setMessage_date(new Date());
		this.messageService.save(message);
	}
}
