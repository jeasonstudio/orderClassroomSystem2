const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/manage': {
        component(resolve) {
            require(['./views/manage.vue'], resolve);
        }
    },
    '/user': {
        component(resolve) {
            require(['./views/user.vue'], resolve);
        }
    },
    '/info': {
        component(resolve) {
            require(['./views/info.vue'], resolve);
        }
    }
};
export default routers;