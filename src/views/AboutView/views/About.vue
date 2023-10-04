<template>
  <div class="p-5 rounded shadow m-5">
    <div class="h3 pb-2">
      PTaaS Documents
    </div>
    <div class="bg-light rounded shadow p-3">
      <div style="text-align: justify;">
        PTaaS stands for <b>Penetration Testing as a Service</b>. This application is used to perform
        penetration testing on a host without any human agent needed. You can use this application
        in order to check your system security against various attacks. This app is created for
        testing SaaS (aka Software as a Service) applications on Kubernetes cluster or any container
        system environment. In order to use this application make sure to install base api, core api, and
        ftp server on your cluster. You deploy your application on a cluster by using manifests of PTaaS.
        You can find these manifests in our <a href="https://github.com/ptaas-tool/deployment">Github Deployment</a> repository.
      </div>
    </div>
    <div class="bg-light rounded shadow p-3 my-3">
      <div class="h5">
        Project
      </div>
      <div style="text-align: justify;">
        In order to make a test process for a host you need to create a project in a namespace. Becarefull that all of
        the users in that namespace can see the project and it's results. But only developers can create new projects
        and execute the tests.
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
