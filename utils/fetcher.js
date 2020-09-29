import Axios from "axios";

export const fetcher = (...args) => Axios(...args).then((res) => res.data);
