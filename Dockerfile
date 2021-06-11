FROM node:lts-alpine AS build
WORKDIR /build

# Install all dependencies
COPY package*.json ./
RUN yarn global add @angular/cli
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build static app files
RUN yarn run build

FROM nginx
WORKDIR /app

# Copy build artifacts to NGINX public folder
COPY --from=build /build/dist /usr/share/nginx/html

COPY --from=build /build/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
