package br.edu.utfpr.pb.plataformaDoacao.service.impl;


import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.utfpr.pb.plataformaDoacao.service.CrudService;


public abstract class CrudServiceImpl <T, ID extends Serializable> implements CrudService<T, ID>{

	protected abstract JpaRepository<T, ID> getRepository();
	
	@Override
	@Transactional(readOnly = true)
	public List<T> findAll() {
		// TODO Auto-generated method stub
		return getRepository().findAll();
	}
	
	@Override
	@Transactional(readOnly = true)
	public List<T> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return getRepository().findAll(sort);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Page<T> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return getRepository().findAll(pageable);
	}
	
	@Override
	@Transactional
	public void flush() {
		getRepository().flush();
	}
	
	@Override
	@Transactional(readOnly = true)
	public  T findOne(ID id) {
		return getRepository().findById(id).orElse(null);
	}
	
	@Override
	@Transactional(readOnly = true)
	public boolean exists(ID id) {
		return getRepository().existsById(id);
	}
	
	@Override
	@Transactional(readOnly = true)
	public long count() {
		// TODO Auto-generated method stub
		return getRepository().count();
	}
	
	@Override
	@Transactional
	public void delete(ID id) {
		// TODO Auto-generated method stub
		getRepository().deleteById(id);
	}
	
	@Override
	@Transactional
	public void delete(T entity) {
		// TODO Auto-generated method stub
		getRepository().delete(entity);
	}
	
	@Override
	@Transactional
	public void delete(Iterable<T> iterable) {
		// TODO Auto-generated method stub
		getRepository().deleteAll(iterable);
	}
	
	@Override
	@Transactional
	public void deleteAll() {
		// TODO Auto-generated method stub
		getRepository().deleteAll();
	}
	
	@Override
	@Transactional
	public T save(T entity) {
		return getRepository().save(entity);
	}
	
	@Override
	public T saveAndFlush(T entity) {
		// TODO Auto-generated method stub
		return getRepository().saveAndFlush(entity);
	}
	
	@Override
	public Iterable<T> save(Iterable<T> iterable) {
		// TODO Auto-generated method stub
		return getRepository().saveAll(iterable);
	}
	
}
