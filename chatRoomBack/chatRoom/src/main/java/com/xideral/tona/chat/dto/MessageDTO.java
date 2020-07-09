package com.xideral.tona.chat.dto;

import java.util.Date;

import com.xideral.tona.chat.common.dto.GenericDTO;
import com.xideral.tona.chat.entities.Message;

public class MessageDTO extends GenericDTO{
	private String message;
	private Date message_date;
	private String uname;
	private int type;
	private String color;
	
	public MessageDTO() {}
	public MessageDTO(Message message) {
		this.setId(message.getId());
		this.message = message.getMessage();
		this.message_date = message.getMessage_date();
		this.uname = message.getUname();
		this.type = message.getType();
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getMessage_date() {
		return message_date;
	}
	public void setMessage_date(Date message_date) {
		this.message_date = message_date;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
}
