# Deploy

## Proceso de despliegue

El proyecto usa GitHub Actions para desplegar automaticamente a GitHub Pages.

## Pasos

1. Hacer cambios en el codigo

2. Commit de los cambios:
```bash
git add .
git commit -m "descripcion de los cambios"
```

3. Push a la rama principal:
```bash
git push origin main
```

4. GitHub Actions ejecutara el workflow de deploy automaticamente

## Workflow

El archivo `.github/workflows/deploy.yml` contiene la configuracion del deploy automatico.

Cada push a `main` dispara:
- Instalacion de dependencias
- Build del proyecto
- Deploy a GitHub Pages

## Verificar el deploy

El estado del deploy se puede ver en la pestana "Actions" del repositorio en GitHub.
