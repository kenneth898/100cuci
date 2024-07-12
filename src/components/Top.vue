<template>
	<div class="Top">
		<div class="top_bg">
			<div class="container-fluid">

				<div class="row">
					<img class="logo-img" src="/public/image/100cuci_logo_sml.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Top'
};
</script>

<style scoped>
.row {
	justify-content: end;
}

.top_bg {
	background-image: url('/public/image/100cuci_logo.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 13vh;
	width: 100%;
	align-content: center;
}

@media screen and (max-width: 426px) {
	.top_bg {
		height: 8vh;
	}

}

@media screen and (max-width:768px) {
	.logo-img {
		width: 16% !important;
	}
}

.logo-img {
	width: 9%;

}
</style>
