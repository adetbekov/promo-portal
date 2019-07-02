FROM node:9.9.0
ENV HOST 0.0.0.0
WORKDIR /promo-portal
COPY . /promo-portal
RUN yarn add nuxt --no-lock
RUN yarn

CMD ["yarn", "dev", "--no-lock"]
