import { Namespaces, CreateNamespace, UpdateNamecpase } from '@/views/NamespacesView';


export default [
    {
        path: '/namespaces',
        component: Namespaces,
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
        component: UpdateNamecpase,
        meta: {
            requiresAuth: true,
            adminRoute: true
        }
    }
];