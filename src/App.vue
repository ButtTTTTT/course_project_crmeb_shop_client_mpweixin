<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			_initTaBar(data) {
				console.log(data);
				data.menus.forEach((it,idx) =>{
					index:idx,
					pagePath: it.url,
					iconPath: it.pic,
					selectedIconPath: it.pic,
					text: it.name
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>