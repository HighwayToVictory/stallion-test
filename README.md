# PTaaS Dashboard

![](https://img.shields.io/badge/app-ui-green)
![](https://img.shields.io/badge/framework-vue.js-lightgreen)
![](https://img.shields.io/badge/version-v0.1.1-blue)

Automated penetration testing UI implemented by ```Vue.js``` framework. A user interface
to use ```PTaaS``` application. In order to setup the user interface, first make sure to have
apt api and ftp server up running. After that read the manuals to setup the ui app
in your kubernetes cluster.

## Image

UI app docker image address:

```shell
docker pull amirhossein21/ptaas-tool:dashboard-v0.1.1
```

### environment variables

Make sure to create ```.env``` file with the following variable init:

```shell
# backend url address which is the ptaas api
VITE_API_URL=http://localhost:8080
VITE_VERSION=v0.1.1
```

## Setup

Setup ui application in docker container with following command:

```shell
docker run -d \
  -v type=bind,source=$(pwd)/.env,dest=/app/.env \
  -p 80:80 \
  amirhossein21/ptaas-tool:dashboard-v0.1.1
```
