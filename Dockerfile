FROM node:9-alpine

ADD ./dolado/src/package.json /app/
WORKDIR /app

RUN yarn install --ignore-optional && yarn cache clean
ADD ./dolado/src /app

#Build
RUN yarn prebuild && yarn build

FROM node:9-alpine

WORKDIR /app

ADD ./dolado/src/package.json /app/

COPY --from=builder ./app ./
RUN yarn install --ignore-optional

CMD ["node", "dist/main"]
