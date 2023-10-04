<template>
  <div class="p-5 rounded shadow m-5">
    <div class="h3 pb-2">
      Create Project
    </div>
    <div class="bg-light shadow rounded p-3">
      <div class="mb-3">
        <div class="form-outline mb-4">
          <input type="text" v-model="name" id="name" class="form-control" placeholder="mysite ..." />
          <label class="form-label" for="name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-braces-asterisk" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"/>
            </svg>
            Name (project name)
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="text" v-model="host" id="host" class="form-control" placeholder="google.com ..." />
          <label class="form-label" for="host">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-bullseye" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            Host (the host that you want to perform tests on)
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="number" v-model="port" id="port" class="form-control" placeholder="8080 ..." />
          <label class="form-label" for="port">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-flag-fill" viewBox="0 0 16 16">
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
            </svg>
            Port (target port)
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="text" v-model="description" id="description" class="form-control" placeholder="what is this?" />
          <label class="form-label" for="description">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            Description
          </label>
        </div>
        <div class="form-outline mb-4">
          <div class="row">
            <div class="col-10">
              <input type="text" v-model="endpointValue" class="form-control" placeholder="/endpoint" aria-label="endpoint">
            </div>
            <div class="col-2 text-center">
              <button v-on:click="addEndpoint" class="btn btn-primary">
                add
              </button>
            </div>
          </div>
          <div class="row my-4" v-for="item in endpoints" :key="item">
            <div class="col-10">
              <input type="text" :value="item" class="form-control" placeholder="endpoint" aria-label="endpoint" disabled />
            </div>
            <div class="col-2 text-center">
              <button v-on:click="removeEndpoint(item)" class="btn btn-danger">
                remove
              </button>
            </div>
          </div>
          <label class="form-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-geo" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
            </svg>
            Endpoints (add specific endpoints that you want to test during the test process)
          </label>
        </div>
        <div class="form-outline mb-4">
          <div class="row">
            <div class="col-5">
              <input type="text" v-model="labelKey" class="form-control" placeholder="label" aria-label="label">
            </div>
            <div class="col-5">
              <input type="text" v-model="labelValue" class="form-control" placeholder="value" aria-label="value">
            </div>
            <div class="col-2 text-center">
              <button v-on:click="addLabel" class="btn btn-primary">
                add
              </button>
            </div>
          </div>
          <div class="row my-4" v-for="item in labels" :key="item.key">
            <div class="col-5">
              <input type="text" :value="item.key" class="form-control" placeholder="label" aria-label="label" disabled />
            </div>
            <div class="col-5">
              <input type="text" :value="item.value" class="form-control" placeholder="value" aria-label="value" disabled />
            </div>
            <div class="col-2 text-center">
              <button v-on:click="removeLabel(item.key)" class="btn btn-danger">
                remove
              </button>
            </div>
          </div>
          <label class="form-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-window-stack" viewBox="0 0 16 16">
              <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"/>
            </svg>
            Labels (project labels)
          </label>
        </div>
        <div class="form-outline mb-4">
          <div class="row">
            <div class="col-5">
              <input type="text" v-model="paramKey" class="form-control" placeholder="param" aria-label="param">
            </div>
            <div class="col-5">
              <input type="text" v-model="paramValue" class="form-control" placeholder="value" aria-label="value">
            </div>
            <div class="col-2 text-center">
              <button v-on:click="addParam" class="btn btn-primary">
                add
              </button>
            </div>
          </div>
          <div class="row my-4" v-for="item in params" :key="item.key">
            <div class="col-5">
              <input type="text" :value="item.key" class="form-control" placeholder="param" aria-label="param" disabled />
            </div>
            <div class="col-5">
              <input type="text" :value="item.value" class="form-control" placeholder="value" aria-label="value" disabled />
            </div>
            <div class="col-2 text-center">
              <button v-on:click="removeParam(item.key)" class="btn btn-danger">
                remove
              </button>
            </div>
          </div>
          <label class="form-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-joystick" viewBox="0 0 16 16">
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
            </svg>
            Params (add system parameters like jwt tokens, http headers, etc.)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="secure" id="secure" />
          <label class="form-check-label" for="secure">
            HTTPS service (do you have a secure host or not)
          </label>
        </div>
      </div>
      <button v-on:click="createProject" type="button" class="btn btn-primary btn-block my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          create
      </button>
    </div>
  </div>
</template>

<script>
import { projectsApi } from '@/api';
import { useAlertStore, useAuthStore } from '@/stores';
import router from '@/router';

export default {
  data() {
    return {
      name: "",
      host: "",
      port: 80,
      secure: false,
      description: "",
      endpoints: [],
      endpointValue: "",
      labels: [],
      labelKey: "",
      labelValue: "",
      params: [],
      paramKey: "",
      paramValue: ""
    }
  },
  methods: {
    async createProject() {
      const authStore = useAuthStore();

      await projectsApi.create(authStore.username(), this.name, this.host, this.port, this.description, this.labels, this.params, this.endpoints, this.secure);

      this.name = "";
      this.host = "";
      this.port = 80;
      this.description = "";
      this.labels = [];
      this.params = [];
      this.endpoints = [];
      this.secure = false;

      const alertStore = useAlertStore();
      alertStore.success("Project created!");

      router.push('/dashboard');
    },
    addLabel() {
      if (this.labelKey.length == 0 || this.labelValue.length == 0) {
        return
      }

      this.labels.push({
        key: this.labelKey,
        value: this.labelValue
      });

      this.labelKey = "";
      this.labelValue = "";
    },
    removeLabel(key) {
      let index = -1;

      this.labels.forEach((el, i) => {
        if (el.key === key) {
          index = i;
        }
      });

      if (index > -1) {
        this.labels.splice(index, 1);
      }
    },
    addParam() {
      if (this.paramKey.length == 0 || this.paramValue.length == 0) {
        return
      }

      this.params.push({
        key: this.paramKey,
        value: this.paramValue
      });

      this.paramKey = "";
      this.paramValue = "";
    },
    removeParam(key) {
      let index = -1;

      this.params.forEach((el, i) => {
        if (el.key === key) {
          index = i;
        }
      });

      if (index > -1) {
        this.params.splice(index, 1);
      }
    },
    addEndpoint() {
      if (this.endpointValue.length == 0) {
        return
      }

      this.endpoints.push(this.endpointValue);
      this.endpointValue = "";
    },
    removeEndpoint(endpoint) {
      let index = this.endpoints.indexOf(endpoint);

      if (index > -1) {
        this.endpoints.splice(index, 1);
      }
    }
  }
}
</script>