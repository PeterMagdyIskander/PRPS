FROM node:lts-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD . /app/

EXPOSE 3000
CMD [ "npm", "start"]