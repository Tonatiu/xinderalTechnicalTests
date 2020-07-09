package com.xideral.tona.chat.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cantidad")
public class Cantidad extends GenericEntity{
	private Procedencia procedencia;
	private Double cantidad;
	
	@ManyToOne()
	@JoinColumn(name= "idProcedencia")
	public Procedencia getProcedencia() {
		return procedencia;
	}
	public void setProcedencia(Procedencia procedencia) {
		this.procedencia = procedencia;
	}
	@Column(name="cantidad")
	public Double getCantidad() {
		return cantidad;
	}
	public void setCantidad(Double cantidad) {
		this.cantidad = cantidad;
	}
}
