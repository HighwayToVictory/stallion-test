import UsersView from '../views/UsersView/index.vue'
import CreateUser from '../views/UsersView/views/CreateUserView.vue'


export default [
    {
        path: '/users',
        component: UsersView,
    },
    {
        path: '/users/new',
        component: CreateUser
    }
];