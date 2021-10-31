# stage 1
FROM node:16.11.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod --openssl-legacy-provider

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/partners-frontend /usr/share/nginx/html