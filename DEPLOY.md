# Despliegue externo de Tacomania

La build normal (`bun run build`) sigue siendo para Lovable. Para Vercel, Netlify o Cloudflare Pages usa la build estática:

```bash
bun run build:static
```

## Vercel

Los ajustes ya quedan en `vercel.json`:

- Build Command: `bun run build:static`
- Output Directory: `dist-static`

## Netlify

Los ajustes ya quedan en `netlify.toml`:

- Build command: `bun run build:static`
- Publish directory: `dist-static`

## Cloudflare Pages

Configura el proyecto así:

- Framework preset: `None`
- Build command: `bun run build:static`
- Build output directory: `dist-static`
- Root directory: `/`

Importante: si Cloudflare Pages estaba intentando usar `bun run build`, generaba una salida de servidor y el dominio podía dar 404. Con `build:static` sí se crea `dist-static/index.html`.