FROM node:14.15.5-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-optional

COPY . .
RUN yarn build++


EXPOSE 3001

CMD ["yarn", "start"]
