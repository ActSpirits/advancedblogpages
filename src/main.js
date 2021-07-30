import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./plugins/axios";
import installElementPlus from './plugins/element'
import api from './config/index'
const app = createApp(App);
installElementPlus(app)
app.config.globalProperties.$api=api.commonUrl;
app.use(store).use(router).use(axios).mount('#app')