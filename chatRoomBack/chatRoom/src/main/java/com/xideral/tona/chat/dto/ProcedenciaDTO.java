package com.xideral.tona.chat.dto;

import com.xideral.tona.chat.common.dto.GenericDTO;
import com.xideral.tona.chat.entities.Procedencia;

public class ProcedenciaDTO extends GenericDTO{
	private String descripcion;
	private Double cantidad;
	
	public ProcedenciaDTO() {}
	public ProcedenciaDTO(Procedencia entity) {
		this.setId(entity.getId());
		this.descripcion = entity.getDescripcion();
	}
	
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Double getCantidad() {
		return cantidad;
	}
	public void setCantidad(Double cantidad) {
		this.cantidad = cantidad;
	}
}
