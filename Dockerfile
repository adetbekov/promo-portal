FROM node:9.9.0
WORKDIR /promo-portal
COPY . /promo-portal

RUN [ -s 'node_modules' ] || yarn

CMD ["yarn", "dev"]
