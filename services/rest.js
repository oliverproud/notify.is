import axios from "axios";
import { catchAxiosError } from "./error";

export const post = (url, data) => {
  return axios.post(url, data).catch(catchAxiosError)
}
