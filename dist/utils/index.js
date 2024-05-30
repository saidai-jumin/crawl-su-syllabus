import axios from "axios";
export const post = async (url, data) => {
    const response = await axios.post(url, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    return response.data;
};
export const get = async (url) => {
    const response = await axios.get(url);
    return response.data;
};
