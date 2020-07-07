import React, { Component } from "react";
import Lista from "./ListaTutoriales";
import Elegido from "./TutorialElegido";
import Button from "react-bootstrap/Button";
import ModalIngresar from "./ModalIngresar";
import "../css/SeccionTutorial.css";
import FormControl from "react-bootstrap/FormControl";
import SnackBar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { postAPI } from "../services/postRequest";
import { getAPI } from "../services/getRequest";
import { putAPI } from "../services/putRequest";
import { deleteAPI } from "../services/deleteByIdRequest";
import { deleteAllAPI } from "../services/deleteAllRequest";
import { create } from "../functions/auxFunctions";
import { CSVLink } from "react-csv";
import { CSVReader } from "react-papaparse";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const buttonRef = React.createRef();

export default class SeccionTutorial extends Component {

  state = {
    data: [],
    original: [],
    tutorialelegido: [],
    openReg: false,
    res: [],
    pubrespuesta: [],
    csvimport: [],
    opensnack: false,
    editmsg: false,
    up: true,
    type: "",
    msg: "",
  };
  
  componentDidMount() {
    this.get();
  }

//llamadas a la api

  get = async () => {
    try {
      const res = await getAPI();
      this.setState({ data: res, original: res });
    } catch (error) {
      alert(error);
    }
  };
  post = async (data) => {
    try {
      const res = await postAPI(data);
      this.clearHistory()
      this.setState({ res: res, opensnack: true, msg: res, type: "success", disable: true });
    } catch (error) {
      this.clearHistory()
      alert(error);
    }
  };
  put = async (data, id) => {
    try {
      const res = await putAPI(data, id);
      this.setState({
        res: res,
        opensnack: true,
        msg: "El tutorial fue modificado correctamente",
        type: "success",
      });
      this.clearHistory();
    } catch (error) {
      this.clearHistory();
      alert(error);
    }
  };
  publicar = async (data, id) => {
    try {
      const res = await putAPI(data, id);
      this.get();
      this.setState({
        res: res,
        tutorialelegido: this.state.tutorialelegido,
        opensnack: true,
        msg: "El tutorial se publico correctamente",
        type: "success",
      });
    } catch (error) {
      alert(error);
    }
  };
  delById = async (id) => {
    try {
      const empty = [];
      const res = await deleteAPI(id);
      this.get();
      this.setState({
        res: res,
        tutorialelegido: empty,
        opensnack: true,
        msg: "El tutorial fue eliminado correctamente",
        type: "success",
      });
    } catch (error) {
      alert(error);
    }
  };
  delAll = async () => {
    try {
      const empty = [];
      const res = await deleteAllAPI();
      this.get();
      this.setState({
        res: res,
        tutorialelegido: empty,
        opensnack: true,
        msg: "Todos los tutoriales fueron eliminados correctamente",
        type: "success",
      });
    } catch (error) {
      alert(error);
    }
  };

  clearHistory =()=>{
    window.location = "/";
  }
 //Handlers
  handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      let publicacion = {
        titulo: e.target[0].value,
        descripcion: e.target[1].value,
        publicado: false,
      };
      this.post(publicacion);
    }
  };
  handlePublicar = async () => {
    const id = this.state.tutorialelegido[0].id;
    let body = this.state.tutorialelegido[0];
    body.publicado = true;
    this.publicar(body, id);
  };

  handleSubmitEdit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const id = this.state.tutorialelegido[0].id;
      const publicacionmodificada = {
        titulo: e.target[1].value,
        descripcion: e.target[2].value,
        publicado: this.state.tutorialelegido[0].publicado,
      };
      this.put(publicacionmodificada, id);
    }
  };
  handler = (e) => {
    const tutorialvalue = e.target.getAttribute("value");
    let elegido = this.state.data
      .filter((s) => s.titulo === tutorialvalue)
      .map((e) => {
        return { id: e.id, titulo: e.titulo, descripcion: e.descripcion, publicado: e.publicado, edicion: true };
      });
    this.setState({ tutorialelegido: elegido, editmsg: false });
  };

  handleSearchChange = (e) => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.original;
      newList = currentList.filter((item) => {
        const lowercase = item.titulo.toString().toLowerCase();
        const filter = e.target.value.toString().toLowerCase();
         return lowercase.includes(filter);
      });
    } else {
      newList = this.state.original;
    }
    //newList.map(e=>alert(e.titulo));
    this.setState({
      data: newList,
    });
  };
  
  handleDeleteAll = () => {
    this.delAll();
  };

  handleDelete = () => {
    const id = this.state.tutorialelegido[0].id;
    this.delById(id);
  };
  activeEdit = () => {
    let pub;
    if (this.state.tutorialelegido[0].edicion) pub = create(false, this.state.tutorialelegido);
    else pub = create(true, this.state.tutorialelegido);
    this.setState({ tutorialelegido: pub });
  };
  handleOpenReg = () => {
    this.setState({ openReg: true });
  };
  handleEditMsg = () => {
    if (this.state.editmsg) this.setState({ editmsg: false });
    else this.setState({ editmsg: true });
  };
  handleClose = () => {
    this.setState({ openReg: false });
  };
  openSnack = () => {
    this.setState({ opensnack: true });
  };
  handleCloseSnack = () => {
    this.setState({ opensnack: false });
  };

  ///experimental: descarga de db en csv y subida a la api
  uploadToApi = async () => {
    const data = this.state.csvimport;
    const dataTojson = data
      .map((e) => {
        if (e.data[3] === "true") return { titulo: e.data[1], descripcion: e.data[2], publicado: true };
        else return { titulo: e.data[1], descripcion: e.data[2], publicado: false };
      })
      .filter((e, i) => i > 0);
    dataTojson.forEach((item) => {
      this.post(item);
    });
  };
  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (file) => {
    this.setState({ csvimport: file, up: false });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    this.setState({ csvimport: [], up: true });
  };

  handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    const { data, editmsg, edit, openReg, type, opensnack, tutorialelegido, msg, up } = this.state;

    return (
      <div className="seccion-container">
        <div className="ml-2 mr-2 tutoriallistas-container">
          <FormControl onChange={this.handleSearchChange} type="text" placeholder="Buscar" className="mb-2" />
          <Lista tutorialeslista={data} handler={this.handler} />
          <Button onClick={this.handleOpenReg} size="small" variant="primary" className="mr-2 mt-1">
            Agregar
          </Button>
          <Button onClick={this.handleDeleteAll} size="small" variant="danger" className="mt-1">
            Borrar todo
          </Button>
        </div>
        <div className="tutorial-content">
          <Elegido
            editmsg={editmsg}
            handleEditMsg={this.handleEditMsg}
            edit={edit}
            activeEdit={this.activeEdit}
            tutorialelegido={tutorialelegido}
            handleDelete={this.handleDelete}
            handlePublicar={this.handlePublicar}
            handleSubmitEdit={this.handleSubmitEdit}
          />
        </div>
        <div className="experimental">
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography color="textSecondary">Experimental</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="experimental-inside">
                <CSVLink data={data}>Descargar csv</CSVLink>
                <CSVReader
                  ref={buttonRef}
                  onFileLoad={this.handleOnFileLoad}
                  onError={this.handleOnError}
                  noClick
                  noDrag
                  onRemoveFile={this.handleOnRemoveFile}>
                  {({ file }) => (
                    <div className="upload-box">
                      <Button variant="link" disabled={up} onClick={this.uploadToApi}>
                        Subir a Api
                      </Button>
                      <Button className="ml-1 mb-2" size="sm" variant="primary" onClick={this.handleOpenDialog}>
                        Buscar
                      </Button>
                      <div>{file && file.name}</div>
                      <Button className="ml-1 mb-2" size="sm" variant="danger" onClick={this.handleRemoveFile}>
                        Remover
                      </Button>
                    </div>
                  )}
                </CSVReader>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <ModalIngresar open={openReg} handleSubmit={this.handleSubmit} handleClose={this.handleClose} />
        <SnackBar open={opensnack} autoHideDuration={5000} onClose={this.handleCloseSnack}>
          <Alert onClose={this.handleCloseSnack} severity={type}>
            {msg}
          </Alert>
        </SnackBar>
      </div>
    );
  }
}
