<template>
	<div class="left_col">
		<div class="col-12">
			<div class="row">
				<!--Free Credit-->
				<a href="https://kk8.my/register" target="_blank"><img width="100%"
						src="/public/image/KK8-Free-Credit-RM10.gif"></a>
				<br><br>
				<!--Grand Launch-->
				<a href="https://kk8.my/register" target="_blank"><img width="100%"
						src="/public/image/Grand-Launch.webp"></a>

				<!--Bank Logo-->
				<img width="100%" src="/public/image/bank_logo.png">

				<!--LIVE TRANSACTION-->
				<img width="100%" src="/public/image/Live_Transaction.png">


				<!--hide on mobile-->
				<div class="hide_mobile">
					<!--Free RM55-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/Free-RM55.gif"></a>

					<!--Klaim Free Kredit-->
					<a href="https://kk8.my/register" target="_blank"><img width="100%"
							src="/public/image/klaim-freecredit-rm10.gif"></a>

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
					<a href="https://t.me/kk8officialcs" target="_blank"><img width="100%"
							src="/public/image/telegram.png"></a>
					<!--Free video xxx-->
					<img width="100%" src="/public/image/free_video_xxx.gif">
					<!--Predit & Win-->
					<img width="100%" src="/public/image/predict&win.gif">


				</div>
			</div>
		</div>



	</div>


</template>

<script>
export default {
	name: 'Left',
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
