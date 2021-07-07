FROM node:14-alpine

LABEL maintainer="WMS Cototech"
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#RUN yarn

# Get args from compose
ARG ENV=production
ARG NODE_ENV=production
ARG PORT=3000

# Parse to env
ENV ENV=$ENV
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

# Install packages
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn

# Bundle app source
COPY . /usr/src/app
RUN NODE_OPTIONS="--max-old-space-size=8192" yarn build

# Sentry Release
RUN npm -g config set user root
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD [ "yarn", "start" ]
