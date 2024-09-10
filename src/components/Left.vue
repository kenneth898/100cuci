<template>
	<div class="left_col">
		<div class="col-12">
			<div class="row">
				<article>
					<!--One Stop Gaming Platform-->
					<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="100%"
							src="/public/image/atas_one_stop_platform.jpg" alt="One Stop Gaming Platform"></a>
					<br><br>
					<!--188% Welcome Bonus-->
					<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="100%"
							src="/public/image/188welcome_bonus.jpg" alt="Welcome Bonus"></a>

					<!--Bank Logo-->
					<img width="100%" alt="bank logo" src="/public/image/bank_logo.png">

					<!--LIVE TRANSACTION-->
					<img width="100%" alt="LIVE TRANSACTION" src="/public/image/Live_Transaction.png">
				</article>

				<!--hide on mobile-->
				<div class="hide_mobile">
					<article>
						<!--baccarat largest bonus-->
						<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/challenge.jpg" alt="baccarat largest bonus"></a>

						<!--check in rm388-->
						<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/check_in.jpg" alt="check in rm388"></a>

						<!--Share & Downline & Copy Link button-->
						<div class="btn_left">
							<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="50%"
									src="/public/image/share_btn.gif" alt="Share"></a>
							<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="50%"
									src="/public/image/downline_btn.gif" alt="Downline"></a>
							<a :href="link + 'sign-up'" rel="nofollow" target="_blank"><img width="50%"
									src="/public/image/copylink_btn.gif" alt="Copy Link button"></a>
						</div>

						<!--Lucky Draw Deposit-->
						<img width="100%" alt="Lucky Draw Deposit" src="/public/image/lucky_draw_deposit.png">
						<!--Telegram-->
						<a href="https://t.me/atas77channel" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/telegram.png" alt="Telegram"></a>
					</article>
					<!--Free video xxx-->
					<img width="100%" alt="Free video xxx" src="/public/image/free_video_xxx.gif">

					<article>
						<!--Predit & Win-->
						<img width="100%" alt="Predit & Win" src="/public/image/predict&win.gif">
					</article>



				</div>
			</div>
		</div>



	</div>


</template>

<script>
import axios from 'axios';
export default {
	name: 'Left',
	data() {
		return {
			link: ""
		}
	},
	methods: {
		async calllink() {
			try {
				const response = await axios.get('https://seo.mobileapplab.online/api/atas?fields[0]=atascasinobet_com', {
					headers: {
						"Authorization": "Bearer " + "1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021",
					}
				});
				this.link = response.data.data.attributes.atascasinobet_com;

				console.log(this.link);
			} catch (error) {
				console.error(error);
			}
		},
	},
	mounted() {
		this.calllink();
	}
};
</script>

<style scoped>
img {
	padding-bottom: 10px;
}

.hide_mobile {
	display: none;
}

@media (min-width: 768px) {
	.hide_mobile {
		display: block;
	}
}
</style>
