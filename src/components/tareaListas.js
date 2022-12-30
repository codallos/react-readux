import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"; // useDispatch sirve para llamar a las funciones; mientras useSelector para traer los datos que estan dentro del estado;
import { eliminaEstadoReabanadaTareas } from "../features/tasks/taskSlice.js";
function TareaListas() {
  const tareas = useSelector((estado) => estado.tareas); // de todo el estado, quiero el estado de la rebanada llamdo tareas
  console.log(tareas);
  const miDespachador = useDispatch();
  const eliminaTarea = (id) => {
    console.log("Desde tarea <Lista></Lista>s", id);
    miDespachador(eliminaEstadoReabanadaTareas(id));
  };
  return (
    <div className='Tarea_Listas'>
      <header className='header-lista'>
        <h1> Tareas {tareas.length}</h1>
        <Link className='crear' to={'/crear-tarea'}>
          Crear tarea
        </Link>
      </header>
      
      <div className='contenedor_tareas'>

      {tareas.map((tarea) => (
        <div className='tarea' key={tarea.id}>
          <h3>{tarea.titulo}</h3>
          <p>{tarea.descripcion}</p>
          {/* Debe de ser una funcion de lo contrario capturara todos los ids */}
          <div className='botones'>
          <button className='eliminar' onClick={() => eliminaTarea(tarea.id)}>Eliminar</button>
          <Link className='actualizar' to={`/editar-tarea/${tarea.id}`}>
            Actualizar
          </Link>

          </div>
        </div>
      ))}
      </div>

    </div>
  );
}

export default TareaListas;
