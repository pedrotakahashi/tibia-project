import axios from "axios";

export const _axios = axios.create({ baseURL: "https://api.tibiadata.com/v2/" });
