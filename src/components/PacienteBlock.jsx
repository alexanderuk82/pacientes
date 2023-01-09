function PacienteBlock({ paciente, setPaciente, eliminar }) {

  function handleDelete() {

    const answer = confirm('Are you sure you want to delete')
    if(answer){
      eliminar(paciente.id)
    }
  }

  return (
    <div className="shadow-sm mt-10 mx-7 p-6 rounded-md flex flex-col gap-5">
      <p className="font-bold uppercase text-left">
        nombre:{' '}
        <span className="font-normal capitalize ">{paciente.nombre}</span>
      </p>
      <p className="font-bold uppercase text-left">
        propietario:{' '}
        <span className="font-normal capitalize ">{paciente.propietario}</span>
      </p>
      <p className="font-bold uppercase text-left">
        email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold uppercase text-left">
        fecha: <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold uppercase text-left">
        sintomas:{' '}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-around">
        <button
          className="bg-blue-600 py-2 px-9 text-white capitalize rounded-sm hover:bg-blue-500 text-xl transition-colors"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>
        <button className="bg-red-600 py-2 px-9 text-white capitalize rounded-sm hover:bg-red-500 text-xl transition-colors"
          onClick={handleDelete}
        >
          eliminar
        </button>
      </div>
    </div>
  );
}

export default PacienteBlock;
