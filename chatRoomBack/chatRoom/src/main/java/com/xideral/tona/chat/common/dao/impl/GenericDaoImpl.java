package com.xideral.tona.chat.common.dao.impl;

import java.io.Serializable;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.xideral.tona.chat.common.dao.GenericDao;

public class GenericDaoImpl<T, K extends java.io.Serializable> implements GenericDao<T, Serializable>{
	Class<T> type;
	private SessionFactory sessionFactory = null;
	
	public SessionFactory getSessionFactory() {
		return this.sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	public Criteria getCriteria() {
		return this.getSession().createCriteria(this.getPersistentClass());
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Serializable save(T paramT) {
		return (K) this.getSession().save(paramT);
	}
	@Override
	public void saveOrUpdate(T paramT) {
		this.getSession().saveOrUpdate(paramT);
		
	}
	@Override
	public T get(Serializable paramPK) {
		return (T) this.getSession().get(this.type, paramPK);
	}
	@Override
	public void update(T paramT) {
		this.getSession().update(paramT);
	}
	@Override
	public void flush() {
		this.getSession().flush();
	}
	@Override
	public void evict(Object paramObject) {
		this.getSession().evict(paramObject);
		
	}
	@Override
	public Class<T> getPersistentClass() {
		return this.type;
	}
	
	
}
