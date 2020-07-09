package com.xideral.tona.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xideral.tona.chat.dto.ConceptoDTO;
import com.xideral.tona.chat.service.ConceptoService;

@RestController
@RequestMapping("/diagramas")
public class ConceptoController {
	@Autowired
	@Qualifier("conceptoService")
	private ConceptoService conceptoService;
	
	@GetMapping("/conceptos")
	public List<ConceptoDTO> getTest() {
		return this.conceptoService.getAll();
	}
}
