import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddMovie = () => {
  return (
    <div id='Form'>
      <Form>
        <Form.Group className='mb-2'>
        <Form.Control type="text" placeholder="Id" />
        </Form.Group>
        <Form.Group className='mb-2'>    
        <Form.Control type="text" placeholder="Nombre de la pelicula" />
        </Form.Group>
        <Form.Group className='mb-2'>
        <Form.Control type="number" placeholder="Año" />
        </Form.Group>
        <Form.Group className='mb-2'>
        <Form.Control type="number" placeholder="Duración" />
        </Form.Group>
        <Form.Group className='mb-2'>
        <Form.Control type="text" placeholder="Lenguaje" />
        </Form.Group>
        <Form.Group className='mb-2'>
        <Form.Control type="date" placeholder="Fecha de lanzamiento" />
        </Form.Group>
        <Form.Group className='mb-2'>
        <Form.Control type="number" placeholder="País" />
        </Form.Group>
    </Form>
    </div>
  )
}

export default AddMovie;