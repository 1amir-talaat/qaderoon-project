export const ORG_NAME = "شباب قادرون";
const ENVIRONMENT = import.meta.env.VITE_NODE_ENVIRONMENT;

// Set base URL from environment variable or hardcode
export const HOST_SERVER =
  ENVIRONMENT == "production" ?
    "https://qyf-eg.org/api"
  : "http://localhost:5000";
export const REFERER =
  ENVIRONMENT == "production" ?
    "https://qyf-eg.org/api"
  : "http://localhost:5173";
