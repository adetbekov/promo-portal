# FROM node:9.9.0
# ENV HOST 0.0.0.0
# COPY . /app
# WORKDIR /app
# RUN yarn

# CMD ["sudo", "yarn", "dev"]
FROM node:9.9.0
ENV HOST 0.0.0.0
ENV PORT 3000
COPY . /app
WORKDIR /app
RUN yarn
RUN yarn add awesome-mask
RUN yarn add nuxt
RUN yarn add global nuxt
RUN yarn build

CMD ["yarn", "start"]