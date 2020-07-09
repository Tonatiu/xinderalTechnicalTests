package com.xideral.tona.chat.dao;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xideral.tona.chat.entities.Message;

@Repository("messageRepo")
public interface MessageDao extends JpaRepository<Message, Serializable>{
	abstract Message findById(Long id);
	abstract List<Message> findByUname(String uname);
}
