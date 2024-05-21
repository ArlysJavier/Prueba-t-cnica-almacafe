package com.example.apiDespachador.repositorio;

import com.example.apiDespachador.modelo.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
// interface que me permimte impelementar los metodos de JPA
}
