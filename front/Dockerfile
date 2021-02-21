# pull official base image
FROM node:14.15.5-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-optional

COPY . .
RUN yarn build

# start app
CMD ["yarn", "start"]
