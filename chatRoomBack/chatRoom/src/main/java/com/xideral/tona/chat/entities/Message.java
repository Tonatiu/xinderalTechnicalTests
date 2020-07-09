package com.xideral.tona.chat.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xideral.tona.chat.dto.MessageDTO;

@Entity
@Table(name = "message")
public class Message extends GenericEntity{
	private String message;
	private Date message_date;
	private String uname;
	private int type;
	
	public Message() {}
	public Message(MessageDTO dto) {
		this.setId(dto.getId());
		this.message = dto.getMessage();
		this.message_date = dto.getMessage_date();
		this.uname = dto.getUname();
		this.type = dto.getType();
	}
	
	@Column(name="message")
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	@Column(name="uname")
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	
	@Column(name="message_date")
	public Date getMessage_date() {
		return message_date;
	}
	public void setMessage_date(Date message_date) {
		this.message_date = message_date;
	}
	@Column(name="message_type")
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
}
