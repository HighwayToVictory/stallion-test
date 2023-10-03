import { CreateProject, Project } from '@/views/ProjectView';


export default [
    {
        path: '/projects/new',
        component: CreateProject,
        meta: {
            requiresAuth: true,
            userRoute: true
        }
    },
    {
        path: '/projects/:id',
        component: Project,
        meta: {
            requiresAuth: true
        }
    }
];