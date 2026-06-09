// Los valores de respaldo evitan que una variable faltante deje toda la SPA en blanco.
const isDevelopment = import.meta.env.DEV;
const devURL = import.meta.env.VITE_API_URL_DEV || 'http://localhost:3000';
const prodURL = import.meta.env.VITE_API_URL_PROD || 'https://ux-ui-orcin.vercel.app';
const configuredTimeout = Number(import.meta.env.VITE_API_TIMEOUT);
const timeout = Number.isFinite(configuredTimeout) && configuredTimeout > 0
  ? configuredTimeout
  : 10000;

const baseURL = isDevelopment ? devURL : prodURL;

export const currentConfig = {
  baseURL,
  timeout
};

// Exportar la URL base para uso directo
export const API_BASE_URL = currentConfig.baseURL;

// Configuración completa para axios
export const axiosConfig = {
  baseURL: currentConfig.baseURL,
  timeout: currentConfig.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
};
