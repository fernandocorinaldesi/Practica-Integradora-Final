import { LOCAL_URL } from "./url";

export const postAPI = async (data) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    const respuesta = await fetch(LOCAL_URL, options);
    if (respuesta.status === 409) {
      alert("El tutorial ya existe");
    } else {
      return respuesta;
    }
  } catch (error) {
    throw error;
  }
};
