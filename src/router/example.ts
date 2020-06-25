export default [
    {
        path: '/example',
        name: 'example',
        component: () => import(/* webpackChunkName: "example" */ '../views/example/index.vue'),
    },
];