FROM node:18.5.0-alpine

WORKDIR /node
COPY ./package.json  ./
ARG NODE_ENV
# install dependencies in /node
# RUN npm install && npm cache clean --force
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only-production && npm cache clean --force; \
    else npm install; \
    fi
# added new workdir for source files
# node_modules will be in parent folder, 
# node will search for node_modules in the parent folder
# hence it will be not visible from host file system
# so that I can install node_modules locally with npm install and run them on the container 
WORKDIR /node/app
COPY . .
CMD ["npm","run", "test"]

#TODO thi file is built with docker-compose although it's located in the .dockerignore file - find a solution



