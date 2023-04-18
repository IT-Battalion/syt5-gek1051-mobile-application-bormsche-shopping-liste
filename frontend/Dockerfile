FROM node:current-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 80
EXPOSE 8081
CMD ["npm", "run", "start"]