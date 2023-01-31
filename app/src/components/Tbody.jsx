
export const Tbody = ({data,erase}) => {

  return (
    <>
      <tr>
        <td>{data._id}</td>
        <td>{data.title}</td>
        <td>{data.year}</td>
        <td>{data.time}</td>
        <td>{data.lang}</td>
        <td>{data.rel}</td>
        <td>{data.rel_country}</td>
        <td>
          <a href="/edit" >editar</a>
          <button onClick={()=>{erase(data._id)}} >borrar</button>
        </td>
      </tr>
    </>
  );
};
