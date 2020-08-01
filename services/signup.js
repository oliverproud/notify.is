import Router from "next/router";
import axios from "axios";

export async function signupHandler(SignupInputs) {
  const data = new URLSearchParams(SignupInputs);
  const res = await axios
    .post("http://localhost:***REMOVED***/api/signup", data)
    .then((response) => {
      Router.push("/thanks");
      return res;
    })
    .catch((error) => {
      console.log(error.message);
      return error.message;
    });
  return res;
}
