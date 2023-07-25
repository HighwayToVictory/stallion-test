import CreateProjectView from '../views/ProjectView/views/CreateProjectView.vue'
import ProjectView from '../views/ProjectView/index.vue'


export default [
    {
        path: '/projects/new',
        component: CreateProjectView,
    },
    {
        path: '/projects/:namespace/:id',
        component: ProjectView
    }
];