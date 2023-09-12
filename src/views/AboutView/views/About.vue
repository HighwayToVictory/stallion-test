<template>
  <div class="p-5">
    <div class="h3 pb-2">
      APT Documents
    </div>
    <div class="bg-light rounded p-3">
      <div style="text-align: justify;">
        APT stands for <b>Automate Penetration Testing</b>. This application is used to perform
        penetration testing on a host without any human agent needed. You can use this application
        in order to check your system security against various attacks. This app is created for
        testing SaaS (aka Software as a Service) applications on Kubernetes cluster or any container
        system environment. In order to use this application make sure to install base api, core api, and
        ftp server on your cluster. You deploy your application on a cluster by using manifests of apt.
        You can find these manifests in our <a href="https://github.com/amirhnajafiz/automated-pen-testing">Github</a> repository.
      </div>
    </div>
    <div class="bg-light rounded p-3 my-3">
      <div class="h5">
        Namespace
      </div>
      <div style="text-align: justify;">
        System provides namespaces in order to create seperate environemnt for the system clients. You may create
        these namespaces in order to create secret projects or to give view access to particular clients.
      </div>
    </div>
    <div class="bg-light rounded p-3 my-3">
      <div class="h5">
        Project
      </div>
      <div style="text-align: justify;">
        In order to make a test process for a host you need to create a project in a namespace. Becarefull that all of
        the users in that namespace can see the project and it's results. But only developers can create new projects
        and execute the tests.
      </div>
    </div>
    <div class="bg-light rounded p-3">
      <div class="h5">
        Users and Roles
      </div>
      <div style="text-align: justify;">
        Our users are divided into three groups in order to manage their access. You can see these groups are
        as follow:<br /><br />
        <ul>
          <li>
            Admin: full access to users, namespaces, projects and can edit all of them
          </li>
          <li>
            Developer: only has access to execute or remove projects
          </li>
          <li>
            Viewer: can only see projects and documents
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-light rounded p-3 my-3">
      <div class="h5">
        Metrics
      </div>
      <div style="text-align: justify;">
        As admins can visit the metrics page, they can get cluter metrics in order to get the application
        details and performance metrics. These metrics are used to monitor application status over time.
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
