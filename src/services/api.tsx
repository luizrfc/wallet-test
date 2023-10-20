import axios from "axios";

export const BASE_URL = "http://192.168.0.116:3000";

export const api = axios.create({
  baseURL: BASE_URL
});

const FAILED_RESPONSE = { success: false, error: true };

const submit =
  (action: any, hasData = true) =>
  async (url: string, data?: object): Promise<any> => {
    const request = hasData ? action(url, data) : action(url);
    return request
      .then((res: any) => ({ data: res.data, success: true }))
      .catch(() => FAILED_RESPONSE);
  };

const post = submit(axios.post);
const put = submit(axios.put);
const del = submit(axios.delete, false);
const get = submit(axios.get, false);

export { del, get, post, put };
