# build stage
FROM node:lts-alpine as build-stage

# create app workdirectory
WORKDIR /app

# copy package.json
COPY package*.json ./

# instaull modules
RUN npm install

# copy rest
COPY . .

# build vue app
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

MAINTAINER amirhnajafiz
LABEL app=frontend
LABEL function=ui

# set environment
ENV VITE_API_URL=http://localhost:8080

# copy built files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# expose on nginx 80
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
