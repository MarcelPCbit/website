FROM node:16

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./server ./server

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "serve" ]