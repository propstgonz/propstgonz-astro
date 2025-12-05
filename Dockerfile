# ETAPA 1: BUILD
FROM node:lts-alpine AS builder

WORKDIR /app

# Dependencias necesarias para compilar sharp
RUN apk add --no-cache python3 make g++ vips-dev

# Copiar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar resto de la app
COPY . .

# Generar build de astro
RUN npm run build

# Quitar dependencias de desarrollo
RUN npm prune --production

# ETAPA 2: PRODUCCIÓN
FROM node:lts-alpine AS runner

WORKDIR /app

RUN apk add --no-cache vips

# Copiar solo lo necesario
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
