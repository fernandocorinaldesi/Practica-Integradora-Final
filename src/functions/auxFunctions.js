export const create = (bool,tutorial)=>{
    let tut;
    tut = [
        {
          id: tutorial[0].id,
          titulo: tutorial[0].titulo,
          descripcion: tutorial[0].descripcion,
          publicado: tutorial[0].publicado,
          edicion: bool,
        },
      ];
      return tut;
}