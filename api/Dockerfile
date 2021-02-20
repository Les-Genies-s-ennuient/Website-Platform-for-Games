FROM node:14.15.5-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .
RUN yarn install --ignore-optional


EXPOSE 3001

CMD ["yarn", "run", "start"]
