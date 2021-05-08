FROM node:12-alpine3.10

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . ./

EXPOSE 3000

RUN npm install pm2 -g

CMD [ "pm2-runtime", "index.js"] 

# in case of actual application, CMD will be ["node","index.js"]