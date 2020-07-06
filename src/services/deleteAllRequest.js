import { LOCAL_URL } from "./url";

export const deleteAllAPI = async () => { 
    try {
          const options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      const respuesta = await fetch(LOCAL_URL,options);
      const res = await respuesta.json();
      return res;
  } catch (error) {
    throw error;
  }
}