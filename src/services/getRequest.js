import { LOCAL_URL } from "./url";

export const getAPI = async () => { 
  try {
    const respuesta = await fetch(LOCAL_URL);
    const tutoriales = await respuesta.json();
    return tutoriales;
  } catch (error) {
    throw error;
  }
}
