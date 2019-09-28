FROM node:10.13-slim

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

RUN echo "America/New_York" > /etc/timezone

RUN dpkg-reconfigure -f noninteractive tzdata

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

COPY yarn.* /usr/src/app/

RUN yarn

COPY . /usr/src/app/

CMD /wait && yarn dev