import UsersView from '../views/UsersView/index.vue'
import CreateUser from '../views/UsersView/views/CreateUserView.vue'


export default [
    {
        path: '/users',
        component: UsersView,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    },
    {
        path: '/users/new',
        component: CreateUser,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    }
];