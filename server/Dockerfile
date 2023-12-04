FROM node:alpine

RUN mkdir -p /usr/test/server

WORKDIR /usr/test/server

COPY package.json .

RUN npm install --only=prod

COPY . .

CMD ["npm","start"]
