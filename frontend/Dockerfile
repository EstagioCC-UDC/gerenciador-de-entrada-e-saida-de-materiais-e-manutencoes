FROM node:10.13-slim

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

COPY yarn.* /usr/src/app/

RUN echo "America/New_York" > /etc/timezone

RUN dpkg-reconfigure -f noninteractive tzdata

ARG BACKEND_URL

ENV BACKEND_URL ${BACKEND_URL}

RUN yarn

COPY . /usr/src/app/

CMD yarn start