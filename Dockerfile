FROM node:12.18-alpine3.11

RUN apk add --no-cache git python2

WORKDIR /srv
ADD . /srv

RUN yarn install

EXPOSE 8080

CMD ["yarn", "serve"]
