FROM node:18.5.0-alpine

WORKDIR /node
COPY ./package.json ./
ARG NODE_ENV

RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only-production && npm cache clean --force; \
    else npm install; \
    fi

WORKDIR /node/app
COPY . .
CMD ["npm","run","build"]