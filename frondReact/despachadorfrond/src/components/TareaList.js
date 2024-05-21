import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TareaList = ({ refresh, onEdit }) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    axios.get('/api/tareas')
      .then(response => setTareas(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [refresh]);
//delete
  const fetchTareas = async () => {
    const response = await fetch('/api/tareas');
    const data = await response.json();
    setTareas(data);
  };

  const deleteTarea = async (id) => {
    await fetch(`/api/tareas/${id}`, {
      method: 'DELETE',
    });
    fetchTareas();
  };

  return (
    <div>
      <h3>Actividades_________________________</h3>
      <h6>(    Actividad   -   estado   -   inicio   -   final   ) </h6>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.descripcion} - {tarea.estado} - {tarea.prioridad} - {tarea.inicio} - {tarea.fin}
            <button className="btn btn-sm ml-2" onClick={() => deleteTarea(tarea.id)}>(delet)</button>
            <button className="btn btn-sm" onClick={() => onEdit(tarea)}>[Edit]</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default TareaList;

