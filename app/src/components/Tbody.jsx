import { useState } from "react";
export const Tbody = ({ data, erase }) => {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <tr>
        <td>
          <input type="text" name="_id" value={data._id} />
        </td>
        <td>
          <input type="text" name="title" value={data.title} />
        </td>
        <td>
          <input type="number" name="year" value={data.year} />
        </td>
        <td>
          <input type="text" name="time" value={data.time} />
        </td>
        <td>
          <input type="text" name="lang" value={data.lang} />
        </td>
        <td>
          <input type="text" name="rel" value={data.rel} />
        </td>
        <td>
          <input type="text" name="rel_country" value={data.rel_country} />
        </td>
        <td>
          <button
            onClick={(_) => {
              setEditing(false);
            }}
          >
          Guardar
          </button>
        </td>
      </tr>
    );
  }

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
          <button
            onClick={(_) => {
              setEditing(true);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              erase(data._id);
            }}
          >
            borrar
          </button>
        </td>
      </tr>
    </>
  );
};
