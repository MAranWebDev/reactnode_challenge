## get image
ARG VER_NODE
ARG VER_NGINX
FROM node:$VER_NODE AS builder

## install dependencies
ARG FOLDER
WORKDIR /usr/src
COPY ./app/$FOLDER/package*.json ./
RUN npm ci
ENV PATH /usr/src/node_modules/.bin:$PATH

## bundle source
WORKDIR /usr/src/app
COPY ./app/$FOLDER ./

## build
RUN npm run build

## deploy app
FROM nginx:$VER_NGINX
COPY --from=builder ./usr/src/app/build/ ./usr/share/nginx/html