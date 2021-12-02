import axios from "axios";
const url = "http://localhost:5000/posts";
export const fetchpost = async () => axios.post(url)
console.log(fetchpost, "FetchPost") 

