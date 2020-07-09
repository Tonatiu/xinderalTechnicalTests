package com.xideral.tona.chat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.xideral.tona.chat.common.transformers.DataTransformer;
import com.xideral.tona.chat.dao.MessageDao;
import com.xideral.tona.chat.dto.MessageDTO;
import com.xideral.tona.chat.entities.Message;

@Service("messageService")
public class MessageService {
	@Autowired
	@Qualifier("messageRepo")
	private MessageDao messageRepo;
	
	@Autowired
	@Qualifier("dataTransformer")
	private DataTransformer dataTransformer;
	
	public void save(MessageDTO message) {
		this.messageRepo.save(new Message(message));
	}
	
	public List<MessageDTO> findByUname(String uname){
		List<Message> messages = this.messageRepo.findByUname(uname);
		return this.dataTransformer.messageToDTO(messages);
	}
}
