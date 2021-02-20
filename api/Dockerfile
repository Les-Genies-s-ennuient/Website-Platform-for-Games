FROM node:14.15.5-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .
RUN yarn install


EXPOSE 3001

CMD ["yarn", "run", "start"]
