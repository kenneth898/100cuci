<template>
	<div class="container-fluid">
		<div class="row">
			<nav class="navbar fixed-bottom">
				<div class="container-fluid d-flex justify-content-center">
					<div class="menu d-flex justify-content-around w-100">
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/icon_footer_gift_home.png" alt="Home Icon"></a>
							<p>HOME</p>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/livechat.png" alt="Live Chat Icon"></a>
							<p>LIVE CHAT</p>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="60%"
									class="nav-icon bonus_img" src="/public/image/bonus.png" alt="Bonus Icon"></a>
							<p>BONUS</p>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/history.png" alt="History Icon"></a>
							<p>HISTORY</p>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/setting.png" alt="Setting Icon"></a>
							<p>SETTING</p>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Bottom',
};
</script>

<style scoped>
.navbar.fixed-bottom {
	background-color: #0124a8;
	height: 12%;
}

.nav-item {
	flex: 1;
}

p {
	margin: 0;
	color: white;
	font-weight: bold;
	font-size: 12px;
}

.menu {
	position: relative;
	top: -50px;
	align-items: end;
}

.column-height {
	position: relative;
	height: 30%;
}

@media screen and (max-width:2560px) {
	.navbar.fixed-bottom {
		height: 6%;
	}
}



@media screen and (max-width: 1440px) {
	.navbar.fixed-bottom {
		height: 10%;
	}

	p {
		font-size: 10px;
	}

	.column-height {
		height: 25%;
	}
}

@media screen and (max-width: 610px) {
	.menu {
		top: -30px;
	}
}

@media screen and (max-width: 426px) {
	.menu {
		top: -23px;
	}

	.bonus_img {
		width: 75%;
	}
}

@media screen and (max-width:320px) {
	.bonus_img {
		width: 90%;
	}

	.menu {
		top: -16px;
	}
}
</style>
