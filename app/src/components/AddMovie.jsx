import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddMovie = ({add}) => {
  const [formData, setFormData] = useState({
    title: '',
    year: null,
    time: null,
    lang: '',
    rel: '',
    rel_county: ''
  });

  return (
    <div id="Form">
      <Form>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Id" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Nombre de la pelicula"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="number" placeholder="Año" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="number" placeholder="Duración" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Lenguaje" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="date" placeholder="Fecha de lanzamiento" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="number" placeholder="País" />
        </Form.Group>
      </Form>
      <Button onClick={()=>{add(addItem)}}></Button>
    </div>
  );
};

export default AddMovie;
