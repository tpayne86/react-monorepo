FROM node:11

WORKDIR /usr/app

# COPY package*.json ./
# COPY lerna*.json ./
COPY . .

RUN npm i -g yarn
RUN npm i -g lerna
RUN yarn install
RUN yarn project:init
RUN yarn app:bootstrap
