package com.xideral.tona.chat.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="concepto")
public class Concepto extends GenericEntity{
	private String descripcion;
	private Integer tipo;
	private List<Cantidad> cantidades;
	
	
	public Concepto(){}
	@Column(name="descripcion")
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	@Column(name="tipo")
	public Integer getTipo() {
		return tipo;
	}
	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}
	@OneToMany
	@JoinColumn(name = "idConcepto", nullable = true)
	public List<Cantidad> getCantidades() {
		return cantidades;
	}
	public void setCantidades(List<Cantidad> cantidades) {
		this.cantidades = cantidades;
	}
}
