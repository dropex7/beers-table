import BackendProvider from "../utils/BackendProvider";

export const backendProvider = new BackendProvider(
  process.env.REACT_APP_API_URL
);
