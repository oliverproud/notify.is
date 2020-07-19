import axios, { AxiosRequestConfig } from "axios";

import Router from "next/router";

import { catchAxiosError } from "./error";
import { post } from "./rest";

export async function deleteHandler(deleteInputs) {
  const data = new URLSearchParams(deleteInputs);
  const res = await post("/api/delete", data)

  await Router.push("/confirm");
}
