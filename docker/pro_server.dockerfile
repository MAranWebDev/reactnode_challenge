## get image
ARG VER_NODE
FROM node:$VER_NODE

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

## start app
CMD [ "npm", "run", "init" ]