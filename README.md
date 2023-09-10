# APT Client

![](https://img.shields.io/badge/app-apt_client-yellow)
![](https://img.shields.io/badge/test-pass-green)
![](https://img.shields.io/badge/framework-Vue.js-darkgreen)
![](https://img.shields.io/badge/version-v0.0.1-red)

Automated penetration testing UI implemented by ```Vue.js``` framework. A user interface
to use ```APT``` application. In order to setup the user interface, first make sure to have
apt api and ftp server up running. After that read the manuals to setup the ui app
in your kubernetes cluster.

## Image

UI app docker image address:

```shell
docker pull amirhossein21/apt-ui:v0.0.1
```

### environment variables

Make sure to create ```.env``` file with the following variable init:

```shell
# backend url address which is the apt-api
VITE_API_URL=http://localhost:8080
```

## Setup

Setup ui application in docker container with following command:

```shell
docker run -d \
  -v type=bind,source=$(pwd)/.env,dest=/app/.env \
  -p 80:80 \
  amirhossein21/apt-ui:v0.0.1
```
