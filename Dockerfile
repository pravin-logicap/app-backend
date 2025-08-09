# ---- deps ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- prod ----
FROM node:20-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev
# Copy compiled app
COPY --from=build /app/dist ./dist
# Start the server
EXPOSE 3001
CMD ["node", "dist/main.js"] 