FROM node:9.9.0
ENV HOST = 0.0.0.0
EXPOSE 3000
ENV NUXT_PORT = 3000 
WORKDIR /promo-portal
COPY . /promo-portal
RUN npm install nuxt
RUN yarn add nuxt
RUN yarn

CMD ["yarn", "start"]
