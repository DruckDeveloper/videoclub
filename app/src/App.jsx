//Styles
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// Componets
import Table from './components/Table';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
/*   const [moviesList, setMoviesList] = useState([]);

  useEffect(() => { 
    async function fetchData() { 
        await movies.get("/movies");} 
  fetchData(); }); 

  const addMovie = async (item) => {
    const { data } = await movies.post("/movies", item);
    setMoviesList((oldList) => [...oldList, data]);
  };

  const removeMovie = async (id) => {
    await movies.delete(`/movies/${id}`);
    setMoviesList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editMovie = async (id, item) => {
    await movies.put(`/movies/${id}`, item);
  }; */
  return (
    <>
      <NavBar/>
      <Table/>
      <Footer/>
    </>
  )
}

export default App
