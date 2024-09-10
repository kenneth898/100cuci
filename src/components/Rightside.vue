<template>
	<div class="right_col">
		<article>
			<!--Daily unlimited top up bonus-->
			<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
					src="/public/image/daily_top_up_bonus.jpg" alt="Daily unlimited top up bonus"></a>
		</article>




		<div class="col-12">
			<div class="row">
				<div class="col-6">
					<article>
						<!--Login btn-->
						<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/login_btn.gif" alt="Login btn"></a>
					</article>

				</div>

				<div class="col-6">
					<article>
						<!--Register btn-->
						<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/register_btn.gif" alt="Register btn"></a>
					</article>

				</div>
			</div>


		</div>
		<div style="display: flex; margin-top: 10px;" class="col-12">
			<div class="row">
				<div class="col-6">
					<article>
						<p class="text">{{ $t('right.baki') }}: <strong>RM0.00</strong></p>
					</article>


					<!--Deposit & Withdraw-->
					<div class="">
						<article>
							<p class="text">{{ $t('right.deposit') }}: <strong>RM1.00</strong></p>
							<p class="text2">{{ $t('right.withdraw') }}: <strong>RM25.00</strong></p>
						</article>

					</div>
				</div>
				<div class="col-6">
					<article>
						<!--Deposit btn-->
						<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/deposit_btn.gif" alt="Deposit btn"></a>
						<br>
						<!--Withdraw btn-->
						<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
								src="/public/image/withdraw_btn.gif" alt="Withdraw btn"></a>
						<br>
						<!--Refresh btn-->
						<a :href="link + '/sign-up'" rel=" nofollow" target="_blank"><img width="100%"
								src="/public/image/refresh_btn.gif" alt="Refresh btn"></a>
					</article>
				</div>
			</div>
		</div>

		<div class="">
			<article>
				<!--Game Tips X Bet Ratio-->
				<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
						src="/public/image/game_tips_x_bet_ratio.gif" alt="Game Tips X Bet Ratio"></a>


				<!--welcome bonus 188%-->
				<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
						src="/public/image/Atas-Post-Banner-(Eng).jpg" alt="welcome bonus"></a>

				<!--percuma rm88-->
				<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
						src="/public/image/RM88.jpg" alt="percuma rm88"></a>
			</article>

		</div>


		<div class="d-block d-md-none">
			<article>
				<!--baccarat largest bonus-->
				<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="100%"
						src="/public/image/challenge.jpg" alt="baccarat largest bonus"></a>

				<!--Share & Downline & Copy Link button-->
				<div class="btn_left">
					<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="50%"
							src="/public/image/share_btn.gif" alt="Share"></a>
					<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="50%"
							src="/public/image/downline_btn.gif" alt="Downline"></a>
					<a :href="link + '/sign-up'" rel="nofollow" target="_blank"><img width="50%"
							src="/public/image/copylink_btn.gif" alt="Copy Link button"></a>
				</div>

				<!--Lucky Draw Deposit-->
				<img width="100%" src="/public/image/lucky_draw_deposit.png" alt="Lucky Draw Deposit">
				<!--Telegram-->
				<a href="https://t.me/atas77channel" rel="nofollow" target="_blank"><img width="100%"
						src="/public/image/telegram.png" alt="Telegram"></a>
			</article>
			<!--Free video xxx-->
			<img width="100%" src="/public/image/free_video_xxx.gif" alt="Free video xxx">

			<article>
				<!--Predit & Win-->
				<img width="100%" src="/public/image/predict&win.gif" alt="Predit & Win">
			</article>

		</div>

	</div>

</template>

<script>
import axios from 'axios';
export default {
	name: 'Right',
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

.text {
	display: grid;
	color: #022F8A;
	margin: 0px;
}

.text2 {
	display: grid;
	color: #022F8A;
	margin-bottom: 50px;
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