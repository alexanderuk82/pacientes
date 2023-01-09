import { useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem('pacientes')) ?? []
  );
  const [paciente, setPaciente] = useState({});

  function eliminar(id) {
    const newList = pacientes.filter((paciente) => paciente.id !== id);

    setPacientes(newList);
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto text-center my-8">
      <Header />
      <div
        className="flex flex-col gap-10 md:gap-5 md:flex-row md:justify-around mt-8
      "
      >
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminar={eliminar}
        />
      </div>
    </div>
  );
}

export default App;
