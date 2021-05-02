FROM node:15-alpine3.10

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ] 