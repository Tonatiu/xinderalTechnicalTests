package com.xideral.tona.chat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.xideral.tona.chat.common.transformers.DataTransformer;
import com.xideral.tona.chat.dao.ConceptoDao;
import com.xideral.tona.chat.dto.ConceptoDTO;

@Service("conceptoService")
public class ConceptoService {
	@Autowired
	@Qualifier("conceptoRepo")
	private ConceptoDao conceptoRepo;
	
	@Autowired
	@Qualifier("dataTransformer")
	private DataTransformer dataTransformer;
	
	public List<ConceptoDTO> getAll(){
		return this.dataTransformer.conceptoToDTO(this.conceptoRepo.findAll());
	}
}
