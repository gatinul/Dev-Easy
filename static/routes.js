import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


const Home = resolve => {
  require.ensure(['./components/base/Home.vue'],()=>{
    resolve(require('./components/base/Home.vue'))
  },'home')
}

const Login = resolve => {
  require.ensure(['./components/page/Login.vue'],()=>{
    resolve(require('./components/page/Login.vue'))
  },'login')
}

const Test = resolve => {
  require.ensure(['./components/page/Test.vue'],()=>{
    resolve(require('./components/page/Test.vue'))
  },'test')
}

const IntfEdit = resolve => {
  require.ensure(['./components/page/InterfaceEdit.vue'], ()=>{
    resolve(require('./components/page/InterfaceEdit.vue'))
  }, 'intfEdit')
}



export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: '/',
                    component: Test
                },
                {
                  path: '/intfEdit',
                  component: IntfEdit
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
