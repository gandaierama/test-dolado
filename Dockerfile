FROM node:9-alpine

WORKDIR /usr/src/app
COPY dolado/package*.json ./
RUN ls -al

RUN npm install

COPY . .

RUN npm run-script build

EXPOSE 8080

CMD ["npm","start"]