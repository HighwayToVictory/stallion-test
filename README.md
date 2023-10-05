# PTaaS Dashboard

![](https://img.shields.io/badge/framework-vue.js-darkgreen)
![GitHub release (with filter)](https://img.shields.io/github/v/release/ptaas-tool/dashboard)

Automated penetration testing UI implemented by ```Vue.js``` framework. A user interface
to use ```PTaaS``` application. In order to setup the user interface, first make sure to have
gateway api, base api, and ftp server up and running.
After that read the manuals to setup the ui app in your kubernetes cluster.

## Image

UI app docker image address:

```shell
docker pull amirhossein21/ptaas-tool:dashboard-v0.X.X
```

### environment variables

Make sure to create ```.env``` file with the following variable init:

```shell
# backend url address which is the ptaas api
VITE_API_URL=http://localhost:8080
# dashboard version
VITE_VERSION=v0.X.X
```

## Setup

Setup ui application in docker container with following command:

```shell
docker run -d \
  -v type=bind,source=$(pwd)/.env,dest=/app/.env \
  -p 80:80 \
  amirhossein21/ptaas-tool:dashboard-v0.X.X
```
