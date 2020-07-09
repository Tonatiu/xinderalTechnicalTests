package com.xideral.tona.chat.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xideral.tona.chat.entities.GenericEntity;

@Entity
@Table(name="procedencia")
public class Procedencia extends GenericEntity{
	private String descripcion;
	
	@Column(name="descripcion")
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
