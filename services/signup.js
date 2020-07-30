import { post } from "./rest";
import Router from "next/router";
import { catchAxiosError } from "./error";
import axios, { AxiosRequestConfig } from "axios";

export async function signupHandler(SignupInputs) {
  const data = new URLSearchParams(SignupInputs);
  const res = await post("/api/signup", data)

  await Router.push("/thanks");
}
