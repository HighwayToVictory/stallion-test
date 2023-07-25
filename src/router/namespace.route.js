import NamespacesView from '../views/NamespacesView/index.vue'
import CreateNamespace from '../views/NamespacesView/views/CreateNamespaceView.vue'
import EditNamespace from '../views/NamespacesView/views/EditNamespaceView.vue'


export default [
    {
        path: '/namespaces',
        component: NamespacesView,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    },
    {
        path: '/namespaces/new',
        component: CreateNamespace,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    },
    {
        path: '/namespaces/edit/:id',
        component: EditNamespace,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    }
];