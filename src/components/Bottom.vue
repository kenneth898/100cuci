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
						<div style="gap: 0.5rem;"
							class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/livechat.png" alt="Live Chat Icon"></a>
							<p>LIVE CHAT</p>
						</div>
						<div style="gap: 0.5rem;"
							class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="50%"
									class="nav-icon bonus_img" src="/public/image/bonus.png" alt="Bonus Icon"></a>
							<p>BONUS</p>
						</div>
						<div style="gap: 0.5rem;"
							class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a class="nav-link" href="https://kk8.my/register" target="_blank"><img width="100%"
									class="nav-icon" src="/public/image/history.png" alt="History Icon"></a>
							<p>HISTORY</p>
						</div>
						<div style="gap: 0.5rem;"
							class="nav-item d-flex flex-column align-items-center text-center column-height">
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
	background-color: #04318a;
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
	top: -44px;
	align-items: end;

}

.column-height {
	position: relative;
	height: 30%;
}

@media screen and (max-width: 2560px) {
	.navbar.fixed-bottom {
		height: 6%;
	}
}

@media screen and (max-width: 1600px) {
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

@media screen and (max-width:1024px) {
	.menu {
		top: -50px;
	}

}

@media screen and (max-width: 768px) {
	.menu {
		top: -71px;
	}

	.bonus_img {
		width: 70%;
	}
}

@media screen and (max-width: 630px) {
	.menu {
		top: -59px;
	}

	.bonus_img {
		width: 70%;
	}
}


@media screen and (max-width: 610px) {
	.menu {
		top: -47px;
	}

	.bonus_img {
		width: 70%;
	}
}

@media screen and (max-width: 500px) {
	.menu {
		top: -30px;
	}

	.bonus_img {
		width: 70%;
	}
}


@media screen and (max-width: 425px) {
	.menu {
		top: -35px;
	}

	.bonus_img {
		width: 90%;
	}
}

@media screen and (max-width:320px) {
	.bonus_img {
		width: 90%;
	}

	.menu {
		top: -28px;
	}
}
</style>
