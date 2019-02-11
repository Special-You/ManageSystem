import axios from 'axios'

let api = api || {};

//api.baseUrl = 'http://47.104.77.99:8080/OA/';


const http = axios.create({
    headers :{
        'Content-Type':'application/json',
    },
    timeout:3000
});

// axios.defaults.baseURL = api.baseUrl;

http.interceptors.request.use(
    config =>{
        // config.headers.token = localStorage.getItem('_token');//写在此处防止第一次进去token为空
        if(config.method === 'post'){
            config.data = JSON.stringify(config.data);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    res =>{
        if(res.status === 200){
            return res.data;
        }else{
            return {
                flag:2,
                message:"请求数据失败"
            }
        }
    },
    error => {
        return Promise.reject(error);
    }
);

api.http = http;

//接口请求
api.login = '/OA/emp/behindLogin';
api.queryOut = '/OA/onDuty/out-extrawork/queryByCondition';



export {api};
