import Axios from 'axios'
import Store from './store'
import Router from './router'


//http 全局拦截

//header 设置token

export default function axiosSetting() {
    Axios.interceptors.request.use(
        config => {
            if (Store.state.token) {
                config.headers.token = Store.state.token
            }
            return config
        }
    )
    Axios.interceptors.response.use(
        response => {
 
            if (response.status == 200) {
                const data = response.data;
                if (data.code == -1) {
                    //token失效
                    Store.commit("setToken", '');
                    localStorage.removeItem('token')
                    //跳转到登录页
                    Router.replace({
                        path: '/login'
                    })
                }
                return data
            }
            return response
        }

    )
}