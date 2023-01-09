import { useState, useEffect } from 'react';
import MessageError from './MessageError';
import { generateId } from '../Helper/main';

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (paciente.id) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  function handleSubmit(e) {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      const objectPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if (paciente.id) {
        objectPaciente.id = paciente.id;
        const pacienteEditado = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objectPaciente : pacienteState
        );

        setPacientes(pacienteEditado);
        setPaciente({});
      } else {
        objectPaciente.id = generateId();
        setPacientes([...pacientes, objectPaciente]);
      }

      //!Empty fields

      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  }

  return (
    <aside className="md:w-1/2">
      <h3 className="text-2xl font-bold ">Seguimiento Pacientes</h3>
      <p className="text-normal capitalize mt-5 font-semibold">
        Añade Pacientes y <span className="text-blue-600">administralos</span>
      </p>
      <div className="shadow-sm mt-10 mx-7 p-6 rounded-md">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {error ? <MessageError message="Hay errores en el formulario" /> : ''}

          <div>
            <label
              htmlFor="mascota"
              className="block text-left uppercase text-sm mb-3 font-medium"
            >
              Nombre mascota
            </label>
            <input
              type="text"
              id="mascota"
              className="w-full p-4 border-gray-200 border rounded-sm placeholder:text-gray-300"
              placeholder="ingrese nombre mascota"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div>
            <label
              htmlFor="propietario"
              className="block text-left uppercase text-sm mb-3 font-medium"
            >
              Nombre propietario
            </label>
            <input
              type="text"
              id="propietario"
              className="w-full p-4 border-gray-200 border rounded-sm placeholder:text-gray-300"
              placeholder="ingrese nombre propietario"
              onChange={(e) => setPropietario(e.target.value)}
              value={propietario}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left uppercase text-sm mb-3 font-medium"
            >
              Nombre email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 border-gray-200 border rounded-sm placeholder:text-gray-300"
              placeholder="ingrese email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label
              htmlFor="fecha"
              className="block text-left uppercase text-sm mb-3 font-medium"
            >
              fecha de alta
            </label>
            <input
              type="date"
              id="fecha"
              className="w-full p-4 border-gray-200 border rounded-sm placeholder:text-gray-300"
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
            />
          </div>
          <div>
            <label
              htmlFor="sintomas"
              className="block text-left uppercase text-sm mb-3 font-medium"
            >
              sintomas
            </label>
            <textarea
              id="sintomas"
              className="w-full p-4 border-gray-200 border rounded-sm placeholder:text-gray-300"
              placeholder="ingrese sintomas de la mascota"
              onChange={(e) => setSintomas(e.target.value)}
              value={sintomas}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 p-3 text-white uppercase font-semibold rounded-sm hover:bg-blue-500 transition-all"
          >
            {paciente.id ? 'Guardar Cambios' : 'agregar paciente'}
          </button>
        </form>
      </div>
    </aside>
  );
}

export default Formulario;
