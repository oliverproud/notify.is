import axios, { AxiosRequestConfig } from "axios";

import Router from "next/router";

import { catchAxiosError } from "./error";
import { post } from "./rest";

export async function signupHandler(SignupInputs) {
  const data = new URLSearchParams(SignupInputs);
  const res = await post("/api/signup", data)

}
