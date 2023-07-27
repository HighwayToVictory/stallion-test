import { Users, Create } from '@/views/UsersView'


export default [
    {
        path: '/users',
        component: Users,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    },
    {
        path: '/users/new',
        component: Create,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    }
];