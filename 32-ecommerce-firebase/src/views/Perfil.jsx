import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { Layout, LoginForm } from "../components";
import { useUserContext } from "../contexts/userContext";
import { auth } from "../firebase/credenciales";
import { loginEmail } from "../functions/";

function Perfil() {
  const { user } = useUserContext();
  const [error, setError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(correo, password)
      .then(() => setError(null))
      .catch((error) => setError(error.message));
  }

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full max-w-md">
          {user ? (
            <div className="bg-gray-200 p-4 rounded-lg">
              <p className="text-xl">
                Bienvenido,{" "}
                <span className="font-bold">
                  {user.email} 
                </span>
              </p>
              <button
                onClick={() => signOut(auth)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <p className="text-xl my-3">Inicia Sesión para ver tu perfil:</p>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
                  <input id="email" type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo Electrónico" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                  <input id="password" type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************" />
                </div>
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Perfil;
