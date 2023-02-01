//   Imports the main React component and hook
import { useState } from "react";
//   Imports form Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const AddMovie = ({add}) => {

  //   States for item document
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [time, setTime] = useState(0);
  const [lang, setLang] = useState('');
  const [rel, setRel] = useState('');
  const [rel_country, setRel_country] = useState('');

//   Item model 
const addItem ={
    title: title,
    year: year,
    time: time,
    lang: lang,
    rel: rel,
    rel_country: rel_country};

  //   Component return
  return (
    <div id="Form">
      <Form>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Id" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Nombre de la pelicula"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control 
          type="number" 
          placeholder="Año" 
          // Update year state with selected year  
          onChange={(e) => {setYear(e.target.value)}}
          value={year}
          />
          
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control 
          type="number" 
          placeholder="Duración" 
          onChange={(e) => {setTime(e.target.value)}}
          value={time}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Lenguaje"          
          onChange={(e) => {setLang(e.target.value)}}
          value={lang}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="date" placeholder="Fecha de lanzamiento"           
          onChange={(e) => {setRel(e.target.value)}}
          value={rel}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="País"
          onChange={(e) => {setRel_country(e.target.value)}}
          value={rel_country} />
        </Form.Group>
      </Form>
      {/* Button functionality assignment */}
      <button onClick={()=>{add(addItem)}}>GUARDAR</button>
      
    </div>
  );
};

export default AddMovie;
