# Zomboid.es

Homepage de la comunidad espanola de Project Zomboid con listado de servidores B42.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para produccion
npm run build

# Previsualizar build de produccion
npm run preview
```

## Configuracion

### Enlace de Discord

Edita el archivo `src/data/config.ts` y cambia el valor de `discordInvite`:

```typescript
export const siteConfig = {
  discordInvite: 'https://discord.gg/TU_CODIGO',
};
```

### Servidores

Edita el archivo `src/data/servers.ts` para anadir, modificar o eliminar servidores:

```typescript
export const servers: Server[] = [
  {
    name: 'Nombre del servidor',
    ip: '192.168.1.1',
    port: 16261,
    description: 'Descripcion del servidor',
    slots: 32, // opcional
    website: 'https://ejemplo.com', // opcional
  },
];
```

## Despliegue en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a Settings > Pages
3. En "Build and deployment", selecciona "GitHub Actions"
4. El workflow se ejecutara automaticamente en cada push a `main`

### Dominio personalizado

Para usar zomboid.es:

1. En GitHub Settings > Pages, anade tu dominio personalizado
2. Configura los DNS de tu dominio:
   - Registro A apuntando a las IPs de GitHub Pages
   - O registro CNAME apuntando a `tu-usuario.github.io`

## Seguridad

El proyecto usa Dependabot para mantener las dependencias actualizadas automaticamente.

## Estructura del proyecto

```
src/
  components/     # Componentes reutilizables
  data/           # Datos de configuracion y servidores
  layouts/        # Layout principal
  pages/          # Paginas del sitio
public/           # Archivos estaticos (logo, favicon)
.github/          # Workflows de GitHub Actions y Dependabot
```
