FROM node:lts-alpine AS build
WORKDIR /build

# Install all dependencies
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

# Copy source files
COPY . .

# Build static app files
RUN npm run build

FROM nginx
WORKDIR /app

# Copy build artifacts to NGINX public folder
COPY --from=build /build/dist /usr/share/nginx/html

COPY --from=build /build/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
