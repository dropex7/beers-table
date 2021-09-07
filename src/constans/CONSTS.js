import BackendProvider from "../utils/BackendProvider";

export const backendProvider = new BackendProvider(
  process.env.REACT_APP_API_URL
);

export const DEFAULT_IMAGE_SRC = "https://images.punkapi.com/v2/keg.png";
