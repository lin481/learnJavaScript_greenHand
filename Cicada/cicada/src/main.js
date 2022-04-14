import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { Button, Form, FormItem, Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/button';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
new Vue({
    el: '#app',
    render: h => h(App),
    router,
})