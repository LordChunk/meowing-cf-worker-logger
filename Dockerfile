FROM node:lts-alpine AS build
WORKDIR /build

# Install all dependencies
COPY package*.json ./
RUN yarn global add @angular/cli
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build ssr and static app files
RUN yarn run build:ssr

FROM node:lts-alpine
WORKDIR /app

# Copy build artifacts
COPY --from=build /build/dist ./dist
COPY --from=build /build/package.json ./

ENTRYPOINT yarn run serve:ssr

EXPOSE 4000
