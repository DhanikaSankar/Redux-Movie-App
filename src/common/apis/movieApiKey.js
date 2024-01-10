import axios from "axios";

 const APIKey = axios.create({
    baseURL: "http://www.omdbapi.com",
}) 

export default APIKey;