FROM node:9.9.0
ENV HOST = 0.0.0.0
EXPOSE 3000
ENV NUXT_PORT = 3000 
COPY . /app
WORKDIR /app

RUN sudo yarn add nuxt
RUN sudo yarn

CMD ["sudo", "yarn", "start"]