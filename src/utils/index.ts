import axios from "axios";

export const post = async<T>(url: string, data: any) => {
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  return response.data as T;
};

export const get = async<T>(url: string) => {
  const response = await axios.get(url);
  return response.data as T;
}
