import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginEmail(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    throw error; 
  }
}

export default loginEmail;
