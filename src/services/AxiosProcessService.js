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
}

export default new ProcessApi(BASE_URL);
