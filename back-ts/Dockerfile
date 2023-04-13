FROM node:19-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
EXPOSE 9000

CMD [ "npm", "start" ]
