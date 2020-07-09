package com.xideral.tona.chat.common.transformers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.xideral.tona.chat.dto.CantidadDTO;
import com.xideral.tona.chat.dto.ConceptoDTO;
import com.xideral.tona.chat.dto.MessageDTO;
import com.xideral.tona.chat.dto.ProcedenciaDTO;
import com.xideral.tona.chat.entities.Cantidad;
import com.xideral.tona.chat.entities.Concepto;
import com.xideral.tona.chat.entities.Message;
import com.xideral.tona.chat.entities.Procedencia;

@Component("dataTransformer")
public class DataTransformer{
	public List<MessageDTO> messageToDTO(List<Message> resultSet){
		List<MessageDTO> list = new ArrayList<>();
		resultSet.forEach(r -> list.add(new MessageDTO(r)));
		return list;
	}
	
	public List<ConceptoDTO> conceptoToDTO(List<Concepto> resultSet){
		List<ConceptoDTO> list = new ArrayList<>();
		resultSet.forEach(r -> list.add(new ConceptoDTO(r)));
		return list;
	}
	
	public List<ProcedenciaDTO> procedenciaToDTO(List<Procedencia> resultSet){
		List<ProcedenciaDTO> list = new ArrayList<>();
		resultSet.forEach(r -> list.add(new ProcedenciaDTO(r)));
		return list;
	}
	
	public List<CantidadDTO> cantidadToDTO(List<Cantidad> resultSet){
		List<CantidadDTO> list = new ArrayList<>();
		resultSet.forEach(r -> list.add(new CantidadDTO(r)));
		return list;
	}
}
