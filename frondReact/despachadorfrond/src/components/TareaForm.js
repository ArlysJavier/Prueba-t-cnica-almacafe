import React, { useState } from 'react';
import axios from 'axios';

const TareaForm = ({ tarea, onSave }) => {
  const [descripcion, setDescripcion] = useState(tarea ? tarea.descripcion : '');
  const [estado, setEstado] = useState(tarea ? tarea.estado : 'iniciada');
  const [prioridad, setPrioridad] = useState(tarea ? tarea.prioridad : 'Normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaData = { descripcion, estado, prioridad };
    if (tarea) {
      axios.put(`/api/tareas/${tarea.id}`, tareaData)
        .then(response => onSave(response.data))
        .catch(error => console.error('Error updating task:', error));
    } else {
      axios.post('/api/tareas', tareaData)
        .then(response => onSave(response.data))
        .catch(error => console.error('Error creating task:', error));
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
    <label style={{ marginBottom: '13px', marginRight: '10px' }}><b>Descripción</b></label>
    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
    </div>
      <div>
        <label style={{ marginBottom: '13px', marginRight: '45px' }}><b>Estado</b></label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="iniciada">Iniciada</option>
          <option value="en proceso">En Proceso</option>
          <option value="terminada">Terminada</option>
        </select>
      </div>
      <div>
        <label style={{ marginBottom: '13px', marginRight: '25px' }}><b>Prioridad</b></label>
        <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
          <option value="Urgente">Urgente</option>
          <option value="Normal">Normal</option>
          <option value="Bajo">Bajo</option>
        </select>
      </div>
      <button type="submit" style={{marginRight: '5px'}}>Guardar</button>
    </form>
  );
};

export default TareaForm;
