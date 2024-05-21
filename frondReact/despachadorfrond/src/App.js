import React, { useState } from 'react';
import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [selectedTarea, setSelectedTarea] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = (savedTarea) => {
    setSelectedTarea(null);
    setRefresh(!refresh);
  };

  const handleEdit = (tarea) => {
    setSelectedTarea(tarea);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="container">
        <h1 className="mt-5 mb-3">GESTION DE TAREAS </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Panel Principal</h5>
                <TareaForm tarea={selectedTarea} onSave={handleSave} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lista de Tareas</h5>
                <TareaList refresh={refresh} onEdit={handleEdit}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


