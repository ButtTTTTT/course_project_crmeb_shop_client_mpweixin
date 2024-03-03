<template>
	<view> 首页 </view>
	
</template>

<script>
    import {homeData as homeDataApi} from '@/api/home';
	const app = getApp();
    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {
            this._getHomeData();
        },
        methods: {
            async _getHomeData(){
                const res = await homeDataApi();
				if(res.code === this.API_STATUS_CODE){
					console.log(res);
					app._initTabBar(res);
				}else{
					uni.showToast({
						icon:'none',
						title: '首页数据获取失败,请刷新重试',
						duration: 3000
					});
				}
            }
        }
    }
</script>

<style>
</style>
