import React from "react";
import "../css/ListaTutoriales.css";
import FadeIn from 'react-fade-in';


export default function ListaTutoriales(props) {
  const { tutorialeslista, handler } = props;
  const tuto = tutorialeslista.map((e, i) => {
    return (
      <FadeIn key={i} transitionDuration={700} delay={60*i}>
       <div  className="item" onClick={handler} value={e.titulo} >
          {e.titulo}
       </div></FadeIn>
       );
  });

return <div className="lista-container">{tuto}</div>
}
