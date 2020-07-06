import { LOCAL_URL } from "./url";

 export const putAPI = async (data, id) => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      };
      const respuesta = await fetch(LOCAL_URL+"/" + id, options);
      const res = await respuesta.json();
      return res;   
    } catch (error) {
       throw error;
    }
  };