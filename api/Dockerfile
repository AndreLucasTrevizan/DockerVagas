FROM node:latest

WORKDIR /home/Documents/DockerVagas/api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "start"]