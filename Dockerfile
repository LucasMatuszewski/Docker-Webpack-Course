# FROM node:8
FROM node:8-alpine
# image we want to install (node v.8 - there is lite version for Docker: node:8-alpine)

#make directory on virtual box:
RUN mkdir -p /usr/src/app

#use this directory on VB:
WORKDIR /usr/src/app

#Copy our local package.json to root folder ./ on VB
# COPY package.json ./
# We can ommit it because we copy all files in next step:

# Copy all files (excluding .dockerignore) from local root to VB root
COPY . .

#Run yarn to install packagest from package.json
RUN yarn install
# RUN yarn also should work without "install"

#Port we want to use localy from docker container
EXPOSE 9000

#Only one CMD in this file. Use script from package.json
CMD ["yarn", "serve"]

# we build with command (nodeschool = name of our container, DOT "." = VB root folder to start)
# docker build -t nodeschool .

