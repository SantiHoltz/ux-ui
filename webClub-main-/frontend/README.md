# Club Argentino - Frontend

## Deploy en Vercel

Si el proyecto se importa desde la raiz del repositorio, Vercel usa el
`vercel.json` de la raiz para instalar y compilar esta aplicacion.

Tambien se pueden configurar estas variables en Vercel:

```env
VITE_API_URL_PROD=https://ux-ui-orcin.vercel.app
VITE_API_TIMEOUT=10000
```

Despues de cambiar variables de entorno hay que volver a desplegar. La
aplicacion incluye valores de respaldo para no quedar en blanco si faltan.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
