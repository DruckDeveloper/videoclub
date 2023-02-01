// import of the axios library
import axios from "axios";

// Backend endpoint 
export default axios.create({
    baseURL: "http://localhost:3030"
});