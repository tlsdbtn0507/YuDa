FROM node:alpine as builder

ARG WDS_SOCKET_PORT

ENV REACT_APP_SERVER=$REACT_APP_SERVER 
ENV WDS_SOCKET_PORT=$WDS_SOCKET_PORT

WORKDIR /app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm" , "run", "start" ]

# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /app/build /usr/share/nginx/html