import axios from "axios";
import { GetLanguageForUser } from "../context/translate";

const BASE_URI = "http://localhost:3333";

interface RequestProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path?: string;
  body?: any;
  headers?: any;
  baseURL?: string;
  params?: any;
}

const request = async ({
  method,
  path,
  body,
  headers,
  baseURL,
  params,
}: RequestProps) => {
  try {
    const apiURL = baseURL || BASE_URI;
    const locale = await GetLanguageForUser();

    const { status, data } = await axios.request({
      baseURL: apiURL,
      headers: {
        ...headers,
        locale,
      },
      method,
      url: path,
      data: body,
      params,
    });

    return {
      status,
      error: data.error,
      data: data.data ? data.data : data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export default request;
