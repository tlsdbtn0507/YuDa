FROM node:alpine as builder

# ENV REACT_APP_SERVER api
# ENV WDS_SOCKET_PORT 443

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