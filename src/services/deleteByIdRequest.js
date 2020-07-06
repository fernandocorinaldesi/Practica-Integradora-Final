import { LOCAL_URL } from "./url";

export const deleteAPI = async (id) => { 
    try {
          const options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      const respuesta = await fetch(LOCAL_URL+"/" + id, options);
      const res = await respuesta.json();
      return res;
  } catch (error) {
    throw error;
  }
}

