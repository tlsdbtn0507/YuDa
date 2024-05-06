FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

ENV REACT_APP_SERVER api

COPY . .

CMD [ "npm" , "run", "start" ]

# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /app/build /usr/share/nginx/html