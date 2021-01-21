import axios from "axios";
import { BASE_URL } from "./constants";

class ProcessApi {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
    });

    this.axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        let message = "";
        switch (error.response.data.status) {
          case 400:
            message = "Não foi possível processar a requisição.";
            break;
          case 404:
            message = "Recurso não encontrado.";
            break;
          case 405:
            message = "Funcionalidade não implementada.";
            break;
          default:
            message = "Servidor indisponível.";
            break;
        }
        return Promise.reject(message);
      }
    );
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

  updateProcess(id, processData) {
    const response = this.axiosInstance.put(`/processo/${id}`, processData, {
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
