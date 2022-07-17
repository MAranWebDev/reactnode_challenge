# get image
ARG VER_NODE
FROM node:$VER_NODE

# install dependencies
ARG FOLDER
WORKDIR /usr/src
COPY ./app/$FOLDER/package*.json ./
RUN npm ci
ENV PATH /usr/src/node_modules/.bin:$PATH

# bundle source
WORKDIR /usr/src/app
COPY ./app/$FOLDER ./

# start app
CMD [ "npm", "start"]