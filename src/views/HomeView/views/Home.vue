<template>
  <div class="p-5">
    <div class="h3 pb-2 mb-3">
      Home
    </div>
    <div class="bg-light rounded p-3">
      <div style="text-align: justify;">
        Hi, welcome to <b>Automated Penetration Testing</b> application (aka <b>APT</b>). By using this application
        you can perform penetration testing on your cloud based applications. <b>APT</b> attacks are only related to
        application layer. Overall, this application tests <b>SaaS</b> applications.
        <br />
        This application tests your cloud services that are built based on the following architectures:
        <br />
        <br />
        <ul>
          <li>
            Restful API
          </li>
          <li>
            gRPC
          </li>
          <li>
            Web Socket
          </li>
          <li>
            GraphQL
          </li>
          <li>
            XML
          </li>
        </ul>
        In order to test your applications go into <a href="/dashboard">dashboard</a> page where you will be
        given full guids of how to use this system by creating new project in your namespaces.
      </div>
    </div>
    <div class="bg-light rounded p-3 my-3">
      <div style="text-align: justify;">
        This application is created by a group of students at <b>the Amirkabir University of Tehran, Iran</b>.
        You can get more information about us from our github <a href="https://github.com/apt-tool">organization</a>.
        Feel free to share your comments with us by sending an email to <a href="mailto:amirhossein.najafizadeh21@gmail.com">
          amirhossein.najafizadeh
        </a>. Thank you.
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'
import { projectsApi, namespacesApi, userProjectsApi } from '@/api';

export default {
  data() {
    return {
      user: "",
      namespaces: [],
      projects: [],
      namespace: null
    }
  },
  methods: {
    async select(namespace) {
      this.namespace = namespace;
      
      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    },
    async deleteProject(id) {
      await userProjectsApi.remove(this.namespace.id, id);
      
      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    }
  },
  async mounted() {
    const authStore = useAuthStore();

    this.user = authStore.username();

    this.namespaces = await namespacesApi.get();

    if (this.namespaces.length > 0) {
      this.namespace = this.namespaces[0];

      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    }
  },
  watch: {
    namespace: async function(n, o) {
      if (n !== o) {
        await this.select(n);
      }
    }
  }
}
</script>