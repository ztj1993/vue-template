import axios from "../definitions/axios";

const AxiosPlugin = {
    install: (Vue, options) => {
        Vue.prototype.$axios = axios.create({
            ...options,
        });
    },
};

export default AxiosPlugin;
