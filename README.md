# POTENCIAPP Landings

Monorepo de landing pages demo para diferentes verticales comerciales. Cada landing utiliza un framework UI distinto y genera HTML estático portable a cualquier hosting (AWS S3, Vercel, Netlify, etc.).

## Estructura del Proyecto

```
potenciapp-landings/
├── packages/
│   └── landing-core/           # Paquete compartido
│       ├── src/
│       │   ├── schemas/        # Esquemas Zod por vertical (validación en build)
│       │   ├── theme/          # Tokens CSS, resolver de tema, script del head
│       │   ├── components/     # Componentes React compartidos
│       │   ├── form-handler/   # Handler portable (AWS Lambda compatible)
│       │   └── utils/          # Utilidades comunes
│       └── package.json
├── apps/
│   ├── gastronomia/            # Tailwind CSS + Framer Motion
│   ├── salud-belleza/          # Mantine UI
│   ├── retail/                 # shadcn/ui
│   ├── servicios-profesionales/ # Radix Themes
│   ├── construccion-metalurgica/ # Chakra UI (⚠️ ver nota CSP)
│   └── eventos/                # Tailwind CSS + GSAP
├── .github/workflows/ci.yml    # CI: lint, typecheck, build
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Características Principales

### landing-core

- **Esquemas Zod**: Cada vertical tiene un schema que valida el contenido. El build falla si faltan datos requeridos.
- **Theme Resolver**: Calcula el tema (light/dark) según la hora de Argentina (`America/Argentina/Buenos_Aires`) al momento del build.
- **Script del Head**: Script inline fijo que lee el tema desde `data-build-theme` en `<html>`. El hash para CSP no cambia entre builds.
- **Override de tema**: El parámetro `?tema=light|dark` solo funciona si `POTENCIAPP_PREVIEW=true` o `VERCEL_ENV=preview`.
- **Form Handler Portable**: Función pura sin dependencias de Next.js/Vercel, lista para usar en AWS Lambda.
- **Meta noindex**: Todas las landings tienen `robots: noindex, nofollow` ya que son demos.

### Apps Next.js

Todas las apps usan `output: 'export'` para generar HTML estático. Cada una:

- Depende de `@potenciapp/landing-core` vía `workspace:*`
- Incluye `vercel.json` con CSP, X-Robots-Tag y turbo-ignore
- Valida el contenido en build con Zod

## Instalación y Desarrollo

```bash
# Instalar dependencias
pnpm install

# Desarrollo (todas las apps)
pnpm dev

# Build de todo
pnpm build

# Lint
pnpm lint

# Typecheck
pnpm typecheck
```

### Correr una app específica

```bash
# Desde la raíz
pnpm turbo run dev --filter=@potenciapp/landing-gastronomia

# O entrando al directorio
cd apps/gastronomia && pnpm dev
```

Puertos por defecto:
- gastronomia: 3001
- salud-belleza: 3002
- retail: 3003
- servicios-profesionales: 3004
- construccion-metalurgica: 3005
- eventos: 3006

## Convención de Ramas

```
main          ← Solo merges desde develop con aprobación
  ↑
develop       ← Branch de integración, PRs van acá
  ↑
feature/*     ← Ramas de trabajo
fix/*
```

1. Crear rama desde `develop`: `git checkout -b feature/mi-feature develop`
2. Hacer commits y push
3. Abrir PR contra `develop`
4. Review y merge a `develop`
5. Cuando `develop` está estable, PR de `develop` → `main` (requiere aprobación)

## Configuración en Vercel

Para deployar cada app como proyecto separado en Vercel:

### 1. Root Directory

Configurar el **Root Directory** del proyecto a la app específica:

```
apps/gastronomia
```

### 2. Include files outside the Root Directory

**IMPORTANTE**: Marcar la opción "Include source files outside of the Root Directory in the Build Step".

Esto es necesario porque las apps dependen del paquete `packages/landing-core`.

### 3. Build Command

Ya está configurado en cada `vercel.json`:

```json
{
  "buildCommand": "cd ../.. && pnpm turbo run build --filter=@potenciapp/landing-gastronomia"
}
```

### 4. Output Directory

```
out
```

### 5. Install Command

Dejar vacío para usar el default de pnpm.

### 6. Turbo Ignore (builds selectivos)

Cada app tiene `ignoreCommand: "npx turbo-ignore"` en su `vercel.json`. Esto evita builds innecesarios cuando los cambios no afectan a esa app.

## Content Security Policy (CSP)

Todas las apps tienen CSP configurada en `vercel.json`:

```
script-src 'self' 'sha256-58eJVID/pZGmINNnhOk+tGBctiB2Uhkf7f/fv+r38wQ='
```

El hash corresponde al script inline del head que maneja el tema.

### ⚠️ Excepción: construccion-metalurgica (Chakra UI)

Esta app usa **Chakra UI con Emotion**, que inyecta estilos en runtime. Por esta razón, su CSP incluye:

```
style-src 'self' 'unsafe-inline'
```

**Riesgo aceptado**: `unsafe-inline` en `style-src` permite la inyección de estilos inline, lo cual es una debilidad de seguridad menor. Se acepta porque:

1. Es una landing demo sin datos sensibles
2. El riesgo es bajo (solo estilos, no scripts)
3. Emotion no soporta nonces en SSG
4. Las otras directivas (especialmente `script-src`) permanecen estrictas

Las otras 5 apps mantienen `style-src 'self'` sin `unsafe-inline`.

## Agregar Contenido

Cada app tiene su contenido en `src/content/index.ts`. Para modificarlo:

1. Editar el archivo siguiendo el schema correspondiente (ver `packages/landing-core/src/schemas/`)
2. Correr `pnpm build` - fallará si el contenido no cumple el schema
3. El schema Zod valida automáticamente todos los campos requeridos

## Despliegue a AWS

Las apps generan HTML estático en la carpeta `out/`. Para desplegar en AWS S3 + CloudFront:

```bash
# Build
cd apps/gastronomia && pnpm build

# Subir a S3
aws s3 sync out/ s3://mi-bucket/ --delete

# Invalidar CloudFront
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

### Form Handler para Lambda

El handler de formulario está en `@potenciapp/landing-core/form-handler` y es independiente de frameworks:

```typescript
import { createAwsLambdaHandler } from '@potenciapp/landing-core/form-handler';

export const handler = createAwsLambdaHandler({
  webhookUrl: process.env.WEBHOOK_URL,
});
```

## Licencia

Privado - POTENCIAPP
