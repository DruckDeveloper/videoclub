import Table from 'react-bootstrap/Table';
import { Tbody } from "./Tbody";
import '../App.css'

const Tables = ({data}) => {

  return (
    <>
        <Table striped bordered hover size="sm">
          <thead className='bg'>
            <tr className='bg-warning'>
              <th >id</th>
              <th >Películas</th>
              <th >Año</th>
              <th >Duración</th>
              <th >Lenguaje</th>
              <th >Fecha de Lanzamiento</th>
              <th >País</th>
              <th >Cambios</th>
            </tr>
          </thead>
          <tbody>
              {data.map( (item)  => 
              <Tbody data={item}/> )}
          </tbody>
        </Table>
    </>
  )
}

export default Tables