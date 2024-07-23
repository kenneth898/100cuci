<template>
	<article>
		<div class="Top">
			<div class="top_bg">
				<div class="container-fluid">

					<div class="end">
						<img class="logo-img" alt="100cuci logo" src="/public/image/100cuci_logo_sml.png">

						<button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
							aria-expanded="false">
							<div class="icon">
								<svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
									fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
									<path
										d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
									<path
										d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
								</svg>
							</div>
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li><a class="dropdown-item" @click="changeLanguage('en')">English</a></li>
							<li><a class="dropdown-item" @click="changeLanguage('zh')">中文</a></li>
							<li><a class="dropdown-item" @click="changeLanguage('ms')">Malay</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import { computed } from 'vue';

export default {
	name: 'Top',
	data() {

	},
	methods: {
		changeLanguage(lang) {
			console.log('Changing language to:', lang);
			this.$i18n.locale = lang;
		},

	},
	computed: {
		currentLanguage() {
			return this.$store ? this.$store.state.currentLanguage : 'en';
		}
	}
};
</script>

<style scoped>
.language-button button {
	background: none;
	border: none;
	cursor: pointer;
}

.end {
	text-align: end;
}

.top_bg {
	background-image: url('/public/image/100cuci_logo.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 20vh;
	width: 100%;
	align-content: center;
}

@media screen and (max-width: 425px) {
	.top_bg {
		height: 6vh !important;
	}

}

@media screen and (max-width:768px) {
	.logo-img {
		width: 16% !important;
	}

	.top_bg {
		height: 10vh;
	}
}

.logo-img {
	width: 9%;

}
</style>
