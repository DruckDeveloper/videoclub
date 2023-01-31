import Table from 'react-bootstrap/Table';
import { Tbody } from "./Tbody"

const Tables = ({data, erase}) => {

  return (
    <>
      <div>
        <a href="/create">nuevo</a>
        <Table className='table table-bordered table-triped text-center mt-4'>
          <thead className='bg'>
            <tr className='bg-warning'>
              <th>id</th>
              <th>Películas</th>
              <th>Año</th>
              <th>Duración</th>
              <th>Lenguaje</th>
              <th>Fecha de Lanzamiento</th>
              <th>País</th>
              <th>Cambios</th>
            </tr>
          </thead>
          <tbody>
              {data.map( (item)  => 
              <Tbody data={item} erase={erase}/> )}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Tables