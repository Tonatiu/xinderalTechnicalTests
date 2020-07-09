package com.xideral.tona.chat.dto;

import com.xideral.tona.chat.entities.Cantidad;

public class CantidadDTO {
	private long id;
	private ProcedenciaDTO procedencia;
	private Double cantidad;
	
	public CantidadDTO() {}
	public CantidadDTO(Cantidad entity) {
		this.id = entity.getId();
		this.procedencia = new ProcedenciaDTO(entity.getProcedencia());
		this.cantidad = entity.getCantidad();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public ProcedenciaDTO getProcedencia() {
		return procedencia;
	}
	public void setProcedencia(ProcedenciaDTO procedencia) {
		this.procedencia = procedencia;
	}
	public Double getCantidad() {
		return cantidad;
	}
	public void setCantidad(Double cantidad) {
		this.cantidad = cantidad;
	}
}
