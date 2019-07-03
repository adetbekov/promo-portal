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

CMD ["sudo", "yarn", "build"]