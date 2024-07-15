<template>
	<div class="right_col">
		<!--Daily Check In-->
		<a href="https://kk8.my/register" target="_blank"><img width="100%" src="/public/image/Daily-Check-In.webp"></a>
		<div class="col-12">
			<div class="row">
				<div class="col-6">
					<!--Login btn-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/login_btn.gif"></a>
				</div>

				<div class="col-6">
					<!--Register btn-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/register_btn.gif"></a>
				</div>
			</div>


		</div>
		<div style="display: flex" class="col-12">
			<div class="row">
				<div class="col-6">
					<p class="text">Baki: <strong>RM0.00</strong></p>

					<!--Deposit & Withdraw-->
					<div class="">
						<p class="text">Deposit Minimum: <strong>RM1.00</strong></p>
						<p class="text">Withdraw Minimum: <strong>RM25.00</strong></p>
					</div>
				</div>
				<div class="col-6">
					<!--Deposit btn-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/deposit_btn.gif"></a>
					<br>
					<!--Withdraw btn-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/withdraw_btn.gif"></a>
					<br>
					<!--Refresh btn-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/refresh_btn.gif"></a>
				</div>
			</div>
			<!--baki-->

		</div>

		<div class="">
			<!--Game Tips X Bet Ratio-->
			<a href="https://kk8.my/register" target="_blank"><img width="100%"
					src="/public/image/game_tips_x_bet_ratio.gif"></a>


			<div class="hide_mobile">
				<!--888 Slot Bonus-->
				<a href="https://kk8.my/register" target="_blank"><img width="100%"
						src="/public/image/888-Special-Slot-Bonus.webp"></a>
			</div>


			<!--Free Credit RM10-->
			<a href="https://kk8.my/register" target="_blank"><img width="100%"
					src="/public/image/KK8-Free-Credit-RM10.gif"></a>

			<!--Klaim Credit RM10-->
			<a href="https://kk8.my/register" target="_blank"><img width="100%"
					src="/public/image/klaim-freecredit-rm10.gif"></a>
		</div>


		<div class="d-block d-md-none">
			<!--388 Welcome Bonus-->
			<a href="https://kk8.my/register" target="_blank"><img width="100%"
					src="/public/image/388-Welcome-Bonus.webp"></a>

			<!--Share & Downline & Copy Link button-->
			<div class="btn_left">
				<a href="https://kk8.my/register" target="_blank"><img width="50%"
						src="/public/image/share_btn.gif"></a>
				<a href="https://kk8.my/register" target="_blank"><img width="50%"
						src="/public/image/downline_btn.gif"></a>
				<a href="https://kk8.my/register" target="_blank"><img width="50%"
						src="/public/image/copylink_btn.gif"></a>
			</div>

			<!--Lucky Draw Deposit-->
			<img width="100%" src="/public/image/lucky_draw_deposit.png">
			<!--Telegram-->
			<a href="https://t.me/kk8officialcs" target="_blank"><img width="100%" src="/public/image/telegram.png"></a>
			<!--Free video xxx-->
			<img width="100%" src="/public/image/free_video_xxx.gif">
			<!--Predit & Win-->
			<img width="100%" src="/public/image/predict&win.gif">
		</div>

	</div>

</template>

<script>
export default {
	name: 'Right',
};
</script>

<style scoped>
img {
	padding-bottom: 10px;
}

.text {
	display: grid;
	color: #022F8A;
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
