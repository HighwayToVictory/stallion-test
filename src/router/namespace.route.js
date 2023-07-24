import NamespacesView from '../views/NamespacesView/index.vue'
import CreateNamespace from '../views/NamespacesView/views/CreateNamespaceView.vue'
import EditNamespace from '../views/NamespacesView/views/EditNamespaceView.vue'

export default [
    {
        path: '/namespaces',
        component: NamespacesView,
    },
    {
        path: '/namespaces/new',
        component: CreateNamespace
    },
    {
        path: '/namespaces/edit/:id',
        component: EditNamespace
    }
];