const ROOT_URL = "http://127.0.0.1"
const ROOT_PORT = "8081";
const BASE_URL = ROOT_URL+":"+ROOT_PORT;
export const homeData = () => {
    const url = BASE_URL+"/api/front/index";
    console.log(url);
   
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method: 'GET',
            success: res => resolve(res.data), // 在成功的回调里，用 resolve 返回响应的数据
            fail: (err) => reject(err) // 在失败的回调里，用 reject 返回错误信息
        });
    })
}