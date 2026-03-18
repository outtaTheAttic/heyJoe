import axios from "axios";

export const axiosInstance = axios.create({
  
	baseURL: import.meta.env.MODE === "development" ? "http://10.27.27.2:3000/api" : "/api",
  	withCredentials: true,

});
