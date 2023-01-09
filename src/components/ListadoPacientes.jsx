import PacienteBlock from './PacienteBlock';

function ListadoPacientes({ pacientes, setPaciente, eliminar }) {
  return (
    <aside className="md:w-1/2">
      <h3 className="text-2xl font-bold ">Listado Pacientes</h3>
      <p className="text-normal capitalize mt-5 font-semibold">
        Administras tus <span className="text-blue-600">pacientes y citas</span>
      </p>
      <div className="flex flex-col gap-6">
        {pacientes.map((paciente) => {
          return <PacienteBlock 
            paciente={paciente}
            setPaciente = {setPaciente}
            key={paciente.id} 
            eliminar = {eliminar}
          />;
        })}
      </div>
    </aside>
  );
}

export default ListadoPacientes;
