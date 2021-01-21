import axios from "axios";
import { BASE_URL } from "./constants";

class ProcessApi {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
    });
  }

  fetchProcess(searchTerm) {
    const response = this.axiosInstance.get("/processo", {
      params: {
        q: searchTerm,
      },
    });

    return response;
  }

  createProcess(processData) {
    const response = this.axiosInstance.post("/processo", processData, {
      headers: {
        "Content-type": "application/json",
      },
    });

    return response;
  }

  deleteProcess(processId) {
    return this.axiosInstance.delete(`/processo/${processId}`);
  }
}

export default new ProcessApi(BASE_URL);
