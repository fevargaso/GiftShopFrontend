FROM node:20.16-alpine AS build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY src/ ./src
COPY public/ ./public
COPY angular.json tsconfig.json tsconfig.app.json ./
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.25-alpine
COPY --from=build /build/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
