package com.xideral.tona.chat.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xideral.tona.chat.entities.Concepto;

@Repository("conceptoRepo")
public interface ConceptoDao extends JpaRepository<Concepto, Serializable>{
	 
}
