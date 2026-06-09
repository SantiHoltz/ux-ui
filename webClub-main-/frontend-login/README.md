# Club Argentino - Panel administrativo

## Deploy en Vercel

Este frontend debe estar en un proyecto de Vercel separado del sitio publico.

Configuracion del proyecto:

```text
Root Directory: webClub-main-/frontend-login
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Variables requeridas en `Settings > Environment Variables`:

```env
VITE_ADMIN_USERNAME=usuario_real
VITE_ADMIN_PASSWORD=contraseña_real
VITE_ADMIN_NAME=Administrador
VITE_API_URL=https://ux-ui-orcin.vercel.app
```

Las variables deben habilitarse para `Production`. Despues de agregarlas o
modificarlas hay que crear un nuevo deployment.

El dominio esperado es `login-uxui.vercel.app`. Si muestra
`DEPLOYMENT_NOT_FOUND`, hay que abrir `Settings > Domains`, eliminar ese dominio
del proyecto anterior si corresponde y agregarlo al proyecto que despliega esta
carpeta.
