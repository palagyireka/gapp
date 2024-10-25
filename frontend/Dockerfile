FROM node:20.11.1-alpine3.19 AS build

WORKDIR /usr/src/app/frontend

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn cache clean && yarn install
RUN yarn add -D vite

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
