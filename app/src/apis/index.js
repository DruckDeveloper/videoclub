// import of the axios library
import axios from "axios";

// Backend endpoint 
export default axios.create({
    baseURL: process.env.BACKEND_ENDPOINT || "https://videoclub-five.vercel.app/"
});