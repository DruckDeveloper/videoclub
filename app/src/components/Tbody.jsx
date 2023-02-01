import { useState } from "react";


export const Tbody = ({ data, erase, edit }) => {
  //State allow row editing
  const [editing, setEditing] = useState(false);

  //States for item model 
  const [title, setTitle] = useState(data.title);
  const [year, setYear] = useState(data.year);
  const [time, setTime] = useState(data.time);
  const [lang, setLang] = useState(data.lang);
  const [rel, setRel] = useState(data.rel);
  const [rel_country, setRel_country] = useState(data.rel_country);

//Item model 
const editItem ={
    title: title,
    year: year,
    time: time,
    lang: lang,
    rel: rel,
    rel_country: rel_country
  };


  //IF editing is true enable input rows
  if (editing) {
    return (
      <tr>
        <td>
          <input type="text" name="_id" 
          placeholder={data._id}
          />
        </td>
        <td>
          <input type="text" name="title"          
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          placeholder={data.title}
          />
        </td>
        <td>
          <input type="number" name="year"
          value={year}
          onChange={(e) => {setYear(e.target.value)}}
          placeholder={data.year}
          />
        </td>
        <td>
          <input type="text" name="time"
          value={time}
          onChange={(e) => {setTime(e.target.value)}}
          placeholder={data.time}
          />
        </td>
        <td>
          <input type="text" name="lang"
          value={lang}
          onChange={(e) => {setLang(e.target.value)}}
          placeholder={data.lang}
          />
        </td>
        <td>
          <input type="date" name="rel"
          value={rel}
          onChange={(e) => {setRel(e.target.value)}}
          placeholder={data.rel} 
          // format="dd-mm-yyyy"
          pattern="/^\d{2}\/\d{2}\/\d{4}$/"
          />
        </td>
        <td>
          <input type="text" name="rel_country"
          value={rel_country}
          onChange={(e) => {setRel_country(e.target.value)}}
          placeholder={data.rel_country}
          />
        </td>
        <td>
          <button
            onClick={(_) => {
              edit(data._id, editItem)
              setEditing(false);
            }}
          >
          Guardar
          </button>
          <button
            onClick={(_) => {
              setEditing(false);
            }}
          >
          Cancelar
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
