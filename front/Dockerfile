FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

ENV WDS_SOCKET_HOST = 0.0.0.0 \
  WDS_SOCKET_PATH = /ws \
  WDS_SOCKET_PORT = 443 \
  REACT_APP_SERVER = api

COPY . .

CMD [ "npm" , "run", "build" ]

# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /app/build /usr/share/nginx/html