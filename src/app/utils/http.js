import axios from "axios";

const CONDUIT_API = "https://conduit.productionready.io/api";

const http = axios.create({
  baseURL: CONDUIT_API,
});

export default http;
