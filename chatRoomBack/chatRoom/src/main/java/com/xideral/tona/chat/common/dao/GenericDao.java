package com.xideral.tona.chat.common.dao;

public interface GenericDao <T, PK extends java.io.Serializable>{
	abstract PK save(T paramT);
	abstract void saveOrUpdate(T paramT);
	abstract T get(PK paramPK);
	abstract void update(T paramT);
	abstract void flush();
	abstract void evict(Object paramObject);
	abstract Class<T> getPersistentClass();
}
