package com.xideral.tona.chat.dto;

import java.util.List;

import com.xideral.tona.chat.common.dto.GenericDTO;
import com.xideral.tona.chat.common.transformers.DataTransformer;
import com.xideral.tona.chat.entities.Concepto;

public class ConceptoDTO extends GenericDTO{
	private long id;
	private String descripcion;
	private Integer tipo;
	private List<CantidadDTO> cantidades;
	
	public ConceptoDTO() {}
	public ConceptoDTO(Concepto entity) {
		this.id = entity.getId();
		this.descripcion = entity.getDescripcion();
		this.tipo = entity.getTipo();
		DataTransformer dt = new DataTransformer();
		this.cantidades = dt.cantidadToDTO(entity.getCantidades());
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Integer getTipo() {
		return tipo;
	}
	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}
	public List<CantidadDTO> getCantidades() {
		return cantidades;
	}
	public void setCantidades(List<CantidadDTO> cantidades) {
		this.cantidades = cantidades;
	}
}
