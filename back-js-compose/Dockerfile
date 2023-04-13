FROM node:19-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
USER node
COPY --chown=node:node . .
EXPOSE 4300

CMD [ "npm", "start"]
