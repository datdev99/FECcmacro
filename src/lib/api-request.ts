
import { FilteredUser, UserLoginResponse, UserResponse } from "./types";
import axios from "axios";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://localhost:7190";

export const API_URL = "https://api.ccmacro.com/api";
export const URL_SERVER = "https://api.ccmacro.com/";
export const DOMAIN = "https://ccmacro.com/";
// export const API_URL = "https://localhost:7190/api";
// export const URL_SERVER = "https://localhost:7190/";
export const API_KEY_TINYMCE = "xvspl24fv425zlmgdnp0k6dbmw5yrys5f575z9kgwd6w14zo"
// export async function api() {
//   return SERVER_ENDPOINT;
// } 

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

export async function apiGetSuperHero() {
    try {
        const response = await axios.get(`${SERVER_ENDPOINT}/api/SuperHero`);
        // Handle the successful response here
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // You can choose to rethrow the error or handle it as needed
      }
}

export async function apiRegisterUser(
  credentials: string
): Promise<FilteredUser> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}

export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserLoginResponse>(response).then((data) => data.token);
}