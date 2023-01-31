const Table = (data, addFunction, removeFunction, editMovie) => {

  

  return (
    <>
      <div>
        <a href="/create">nuevo</a>
        <table className='table table-bordered table-triped text-center  mt-4'>
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

            <tr>
              <td>ido</td>
              <td>peli</td>
              <td>año</td>
              <td>dur</td>
              <td>lang</td>
              <td>rel</td>
              <td>pais</td>
              <td>
                <a href="/edit">editar</a>
                <a href="/delete">borrar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table