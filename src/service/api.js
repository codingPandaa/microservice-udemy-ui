import axios from 'axios'

// gateway url
const API_URL = "http://localhost:9191/api/employees";

export const getEmployeeById = async (id) => {  
    try {
      return await axios.get(`${API_URL}/${id}`);
    } catch (error) {
      console.log("error while calling getEmployeeById api", error.message);
    }
};

