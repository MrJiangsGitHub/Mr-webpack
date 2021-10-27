
import axios from 'axios'
// 使用由库提供的配置的默认值来创建实例
const Examples = axios.create({
    baseURL: 'http://127.0.0.1:5660',
    // 设置请求超时
    timeout: 1000,
});
// 添加请求拦截器
Examples.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Examples.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default Examples