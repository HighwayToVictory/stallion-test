import { Users } from '@/views/UsersView'


export default [
    {
        path: '/users',
        component: Users,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    }
];