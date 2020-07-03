FROM node:12.18-alpine3.11

WORKDIR /srv
ADD . /srv
VOLUME /srv/src
EXPOSE 8080

RUN apk add --no-cache git
RUN yarn install

CMD ["yarn", "serve"]
