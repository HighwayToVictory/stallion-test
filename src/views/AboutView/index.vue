<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi me-2 bi-file-earmark-post" viewBox="0 0 16 16">
        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
        <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z"/>
      </svg>
      APT Documents
    </div>
    <div class="overflow-auto border rounded p-5" style="height: 485px;">
      <div style="text-align: justify;">
        APT stands for <b>Automate Penetration Testing</b>. This application is used to perform
        penetration testing on a host without any human agent needed. You can use this application
        in order to check your system security against various attacks. This app is created for
        testing SaaS (aka Software as a Service) applications on Kubernetes cluster or any container
        system environment. In order to use this application make sure to install base api, core api, and
        ftp server on your cluster. You deploy your application on a cluster by using manifests of apt.
        You can find these manifests in our <a href="https://github.com/amirhnajafiz/automated-pen-testing">Github</a> repository.
      </div>
      <div class="h5 my-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg>
        Namespace
      </div>
      <div style="text-align: justify;">
        System provides namespaces in order to create seperate environemnt for the system clients. You may create
        these namespaces in order to create secret projects or to give view access to particular clients.
      </div>
      <div class="h5 my-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-kanban-fill" viewBox="0 0 16 16">
          <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
        </svg>
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
