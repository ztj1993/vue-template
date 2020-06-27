import VueRouter from 'vue-router'

const RouterPlugin = {
    install: (Vue, options = {}) => {
        options = Object.assign({
            routes: [],
        }, options);
        const routes = options.routes;
        const router = new VueRouter({
            mode: process.env.ROUTER_MODE || 'hash',
            base: process.env.BASE_URL,
            routes,
        });
        Vue.mixin({
            beforeCreate: function beforeCreate() {
                this.$options.router = router;
                Vue.use(VueRouter);
            },
        });
    },
};

export default RouterPlugin;
