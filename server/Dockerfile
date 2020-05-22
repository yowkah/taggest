FROM node:alpine

WORKDIR /opt/node_app/

COPY package*.json ./
RUN npm install

COPY . .

CMD npm start