FROM node:9.9.0
ENV HOST 0.0.0.0
WORKDIR /promo-portal
COPY . /promo-portal

RUN [ -s 'node_modules' ] || yarn

CMD ["yarn", "build"]
