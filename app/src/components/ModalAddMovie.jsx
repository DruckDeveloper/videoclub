import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddMovie from "./AddMovie";
import { IoIosAddCircle } from "react-icons/io";
import '../styles/NavBar.css'

//  Modal component
function ModalAddMovie({add}) {
  //  State assignment
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // Show modal function
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      {values.map((v, idx) => (
        <Button
          key={idx} className="addBtn"onClick={() => handleShow(v)}>
          <IoIosAddCircle className="icon"/>
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar una pelicula</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMovie add={add}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAddMovie;
