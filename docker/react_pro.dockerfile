## stage 1
# get image
ARG VER_NODE
ARG VER_NGINX
FROM node:$VER_NODE AS builder

# arguments: they need to be declared after FROM in order to work 
# install dependencies
ARG FOLDER
WORKDIR /usr/src
COPY ./app/$FOLDER/package*.json ./
RUN npm ci
ENV PATH /usr/src/node_modules/.bin:$PATH

# build for production
COPY ./app/$FOLDER ./
RUN npm run build

## stage 2
# get image
FROM nginx:$VER_NGINX

# deploy files
COPY --from=builder ./usr/src/build/ ./usr/share/nginx/html