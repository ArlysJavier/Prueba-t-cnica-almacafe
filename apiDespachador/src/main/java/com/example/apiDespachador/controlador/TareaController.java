package com.example.apiDespachador.controlador;

import com.example.apiDespachador.modelo.Tarea;
import com.example.apiDespachador.repositorio.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//controlador pricipal para suministrar los endpoint de la Api
@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    @Autowired
    private TareaRepository tareaRepository;

    //metodo get para obtener usando la interface JpaRepository
    @GetMapping
    public List<Tarea> getAllTareas() {
        return tareaRepository.findAll();
    }

    //metodo get para obtener por id usando la interface JpaRepository
    @GetMapping("/{id}")
    public ResponseEntity<Tarea> getTareaById(@PathVariable Long id) {
        Optional<Tarea> tarea = tareaRepository.findById(id);
        return tarea.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //metodo post para publicar una nuevaactividad
    @PostMapping
    public Tarea createTarea(@RequestBody Tarea tarea) {
        return tareaRepository.save(tarea);
    }
    //modificacamos una actividad existente
    @PutMapping("/{id}")
    public ResponseEntity<Tarea> updateTarea(@PathVariable Long id, @RequestBody Tarea tareaDetails) {
        Optional<Tarea> tarea = tareaRepository.findById(id);
        if (tarea.isPresent()) {
            Tarea tareaToUpdate = tarea.get();
            tareaToUpdate.setDescripcion(tareaDetails.getDescripcion());
            tareaToUpdate.setEstado(tareaDetails.getEstado());
            tareaToUpdate.setPrioridad(tareaDetails.getPrioridad());
            return ResponseEntity.ok(tareaRepository.save(tareaToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    //metodo delete para borrar una actividad de la lista
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTarea(@PathVariable Long id) {
        Optional<Tarea> tarea = tareaRepository.findById(id);
        if (tarea.isPresent()) {
            tareaRepository.delete(tarea.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}