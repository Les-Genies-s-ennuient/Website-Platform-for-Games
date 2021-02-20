# pull official base image
FROM node:14.15.5-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . .
RUN yarn install

# start app
CMD ["yarn", "start"]
