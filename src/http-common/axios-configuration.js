import axios from "axios";

//REACT_APP_BASE_URL
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`;
axios.defaults.withCredentials = false;
const TOKEN = localStorage.getItem("token");
if (TOKEN) {
  axios.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;
}