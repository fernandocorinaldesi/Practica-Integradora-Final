import React from "react";
import "../css/TutorialElegido.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TutorialElegido(props) {
  let publicado = "";
  const { editmsg,activeEdit,handleEditMsg, tutorialelegido, handleDelete, handlePublicar, handleSubmitEdit } = props;

  const elegido = tutorialelegido.map((e) => {
    if (e.publicado) publicado = "publicado";
    else publicado = "pendiente";
    return (
      <div className="card-container" key={e.id}>
        <div className="card" >
          <Form onSubmit={handleSubmitEdit}>
            <fieldset disabled={e.edicion}>
              <Form.Group className="mr-4 ml-4 mt-2">
                <Form.Label>Titulo</Form.Label>
                <Form.Control defaultValue={e.titulo} required maxLength="255" name="titulo" type="text" />
              </Form.Group>
              <Form.Group className="mr-4 ml-4">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows="3" defaultValue={e.descripcion} required maxLength="255" name="descripcion" />
              </Form.Group>
            </fieldset>
            <div className="estado-container mt-2 mb-2">
            <Typography color="textSecondary">
                Estado
              </Typography>
              <Button size="small" variant="info" disabled>
                {publicado}
              </Button>
            </div>
            <ExpansionPanel>
              <ExpansionPanelSummary onClick={handleEditMsg} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  {editmsg? (
                  <Typography >Click aqui para ocultar</Typography>
                ) : (
                  <Typography color="textSecondary">Click aqui para editar</Typography>
                )}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {e.publicado ? (
                  <Button size="small" variant="primary" className="mr-2" disabled>
                    Publicar
                  </Button>
                ) : (
                  <Button size="small" variant="primary" className="mr-2" onClick={handlePublicar}>
                    Publicar
                  </Button>
                )}
                <Button size="small" variant="danger" onClick={handleDelete} className="mr-2">
                  Borrar
                </Button>
                <Button size="small" variant="success" onClick={activeEdit}>
                  Editar
                </Button>
                {e.edicion ? (
                  <Button size="small" variant="info" className="ml-2" disabled>
                    Actualizar
                  </Button>
                ) : (
                  <Button size="small" variant="info" className="ml-2" type="submit">
                    Actualizar
                  </Button>
                )}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Form>
        </div>
      </div>
    );
  });
  return elegido;
}
