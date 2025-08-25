<template>

	<div class="container-fluid">
		<div class="col-12">
			<div class="row">
				<!--Left-->
				<div style="padding: 0px;" class="col-sm-12 col-md-3 ">
					<div class="left">
						<Left />
					</div>
				</div>

				<!--center-->

				<div class="col-sm-12 col-md-6 mobile_col2">
					<div class="menu_col">
						<article>
							<ul style="display: flex; padding-top: 10px;" class=" nav nav-pills">

								<li class="nav-item">
									<a class="nav-link active" data-bs-toggle="pill" @click="scrollTo('game')">
										{{ $t('menu.slotgame') }}</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-bs-toggle="pill" @click="scrollTo('tab-go-down')">
										{{ $t('menu.eventgame') }}</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-bs-toggle="pill" @click="scrollTo('tab-go-down')">
										{{ $t('menu.eventgame') }}</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-bs-toggle="pill" @click="scrollTo('tab-go-down')">
										{{ $t('menu.livecasino') }}</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-bs-toggle="pill" @click="scrollTo('tab-go-down')">
										{{ $t('menu.sportbook') }}</a>
								</li>

							</ul>
						</article>
					</div>

					<article>
						<div id="game" style="padding-bottom: 30px;" class="main-col">
							<img width="100%" alt="mega888 h5" src="/public/image/mega888.png">
							<img width="100%" alt="power" src="/public/image/power.png">
							<img width="100%" alt="uuslot" src="/public/image/uuslots.png">
							<img width="100%" alt="acewin" src="/public/image/cewin.png">
							<img width="100%" alt="btgaming" src="/public/image/btgaming.png">
							<img width="100%" alt="Playtech" src="/public/image/playtech.png">
							<img width="100%" alt="monkey888" src="/public/image/monkey888.png">
							<img width="100%" alt="KA Gaming" src="/public/image/kagaming.png">
							<img width="100%" alt="BIGPOT Gaming" src="/public/image/bigpotgaming.png">
							<img width="100%" alt="PS" src="/public/image/ps.png">
							<img width="100%" alt="dragoon soft" src="/public/image/dragoonsoft.png">
							<img width="100%" alt="rich gaming" src="/public/image/rich.png">
							<img width="100%" alt="rich88" src="/public/image/rich88.png">
							<img width="100%" alt="JDB slot (Just do the best)" src="/public/image/jdbslot.png">
							<img width="100%" alt="Fachai Gaming (FC)" src="/public/image/fg.png">
							<img width="100%" alt="Pussy888" src="/public/image/pussy888.png">
							<img width="100%" alt="918kiss" src="/public/image/918kiss.png">
							<img width="100%" alt="mega888 app" src="/public/image/2mega888.png">
							<img width="100%" alt="mega888 apk" src="/public/image/2mega888.png">
							<img width="100%" alt="mega888" src="/public/image/2mega888.png">
							<img width="100%" alt="great wall2 99" src="/public/image/greatwall.png">
							<img width="100%" alt="sun city 2" src="/public/image/suncity2.png">
							<img width="100%" alt="xe88" src="/public/image/xe88.png">
							<img width="100%" alt="lucky365" src="/public/image/lucky365.png">
							<img width="100%" alt="918kiss html5" src="/public/image/918kisshtml5.png">
							<img width="100%" alt="3win8" src="/public/image/3win8.png">
							<img width="100%" alt="918kaya" src="/public/image/918kaya.png">
							<img width="100%" alt="evo888" src="/public/image/evo888.png">
							<img width="100%" alt="Pegasus" src="/public/image/pegasus.png">
							<img width="100%" alt="lion king" src="/public/image/lionking.png">
							<img width="100%" alt="KMG slot" src="/public/image/kmg.png">
							<img width="100%" alt="Microgaming" src="/public/image/microgaming.png">
							<img width="100%" alt="Funta Gaming" src="/public/image/funtagaming.png">
							<img width="100%" alt="Next Spin" src="/public/image/nextspin.png">
							<img width="100%" alt="Royal Slot Gaming" src="/public/image/royal.png">
							<img width="100%" alt="ACE333" src="/public/image/ace333.png">
							<img width="100%" alt="Joker Gaming" src="/public/image/jokergaming.png">
							<img width="100%" alt="Habanero" src="/public/image/habanero.png">
						</div>
					</article>

					<div id="tab-go-down" class="text-column">
						<article>
							<h1>{{ $t('Experience.Title1') }}</h1>
							<p>
								<a class="text" href="https://www.100-cuci.com/">{{ $t('Experience.Text1') }}</a>
								{{ $t('Experience.Text2') }}
								<b>{{ $t('Experience.Text3') }}</b>
								{{ $t('Experience.Text4') }}
							</p>

							<br>

							<h2>{{ $t('GameOnline.Title1') }}</h2>
							<p>{{ $t('GameOnline.Text1') }}</p>

							<h3>{{ $t('SlotGames.Title1') }}</h3>
							<p>{{ $t('SlotGames.Text1') }}
								<b>{{ $t('SlotGames.Text2') }}</b>
								{{ $t('SlotGames.Text3') }}
								<b> {{ $t('SlotGames.Text4') }}</b>
								{{ $t('SlotGames.Text5') }}
							</p>

							<h3>{{ $t('LiveDealerGames.Title1') }}</h3>
							<p>{{ $t('LiveDealerGames.Text1') }}
								<b>{{ $t('LiveDealerGames.Text2') }}</b>
								{{ $t('LiveDealerGames.Text3') }}
							</p>

							<h3>{{ $t('SportsBetting.Title1') }}</h3>
							<p>{{ $t('SportsBetting.Text1') }}
								<b>{{ $t('SportsBetting.Text2') }}</b>
								{{ $t('SportsBetting.Text3') }}
							</p>

							<br>

							<h2>{{ $t('FreeCreditBonus.Title1') }}</h2>
							<p>{{ $t('FreeCreditBonus.Text1') }}
							</p>
							<ul>
								<li>
									<p><b>{{ $t('FreeCreditBonus.Text2') }}</b>
										{{ $t('FreeCreditBonus.Text3') }}
										<b>{{ $t('FreeCreditBonus.Text4') }}</b>
										{{ $t('FreeCreditBonus.Text10') }}
									</p>
								</li>
								<li>
									<p><b>{{ $t('FreeCreditBonus.Text5') }}</b>
										<b>{{ $t('FreeCreditBonus.Text6') }}</b>
										{{ $t('FreeCreditBonus.Text7') }}
									</p>
								</li>
								<li>
									<p><b>{{ $t('FreeCreditBonus.Text8') }}</b>
										{{ $t('FreeCreditBonus.Text9') }}
									</p>
								</li>
							</ul>

							<br>

							<h2>{{ $t('SecureandReliable.Title1') }}</h2>
							<p>{{ $t('SecureandReliable.Text1') }}
							</p>

							<br>

							<h2>{{ $t('CustomerSupport.Title1') }}
							</h2>
							<p>
								{{ $t('CustomerSupport.Text1') }}
							</p>
							<ul>
								<li>
									<p><b>{{ $t('CustomerSupport.Text2') }}</b>
										{{ $t('CustomerSupport.Text3') }}
									</p>
								</li>
								<li>
									<p><b>{{ $t('CustomerSupport.Text4') }}</b>
										{{ $t('CustomerSupport.Text5') }}
									</p>
								</li>
								<li>
									<p><b> {{ $t('CustomerSupport.Text6') }}</b>
										{{ $t('CustomerSupport.Text7') }}
									</p>
								</li>
							</ul>

							<br>

							<h3>{{ $t('CustomerSupport.Text8') }}</h3>
							<p><b>{{ $t('CustomerSupport.Text9') }}</b>
								{{ $t('CustomerSupport.Text10') }}
							</p>

							<br>

							<h2>{{ $t('HowtoGetStarted.Title1') }}</h2>
							<h3>{{ $t('HowtoGetStarted.Text1') }}</h3>
							<ul>
								<li>{{ $t('HowtoGetStarted.Text2') }}
									<b>{{ $t('HowtoGetStarted.Text3') }}</b>
									{{ $t('HowtoGetStarted.Text4') }}
								</li>
								<li>{{ $t('HowtoGetStarted.Text5') }}
								</li>
								<li>{{ $t('HowtoGetStarted.Text6') }}
									<b>{{ $t('HowtoGetStarted.Text7') }}</b>
									{{ $t('HowtoGetStarted.Text8') }}
								</li>
							</ul>

							<h3>{{ $t('HowtoGetStarted.Text9') }}</h3>
							<ul>
								<li>{{ $t('HowtoGetStarted.Text10') }}
									<b>{{ $t('HowtoGetStarted.Text11') }}</b>
									{{ $t('HowtoGetStarted.Text12') }}
								</li>
								<li>{{ $t('HowtoGetStarted.Text13') }}
								</li>
							</ul>

							<h3>{{ $t('HowtoGetStarted.Text14') }}</h3>
							<ul>
								<li>{{ $t('HowtoGetStarted.Text15') }}
									<b>{{ $t('HowtoGetStarted.Text16') }}</b>
									{{ $t('HowtoGetStarted.Text17') }}
								</li>
								<li>{{ $t('HowtoGetStarted.Text18') }}</li>
							</ul>

							<br>

							<p>{{ $t('HowtoGetStarted.Text19') }}

								<b>{{ $t('HowtoGetStarted.Text20') }}</b>
								{{ $t('HowtoGetStarted.Text21') }}
							</p>

							<br>

							<p><a href="//www.dmca.com/Protection/Status.aspx?ID=072974b1-54f6-4160-ba79-a565ba9849a3"
									rel="nofollow" title="DMCA.com Protection Status" class="dmca-badge"> <img
										src="/public/image/dmca-badge.png" alt="DMCA.com Protection Status" /></a>
							</p>

							<p style="font-weight: 700;">
								{{ $t('BigPartner.Title1') }}
							</p>
							<p>
								<a :href="link" class="text2">
									{{ $t('BigPartner.Text1') }}
								</a>
								| {{ $t('BigPartner.Text2', { year: new Date().getFullYear() }) }}|
								{{ $t('BigPartner.Text5') }}
							</p>

							<p>
								<a :href="link2" class="text2">
									{{ $t('BigPartner.Text3') }}
								</a>
								| {{ $t('BigPartner.Text4', { year: new Date().getFullYear() }) }}
							</p>
						</article>
					</div>
				</div>



				<div class=" icon_col">
					<article>
						<div class="icon">

							<!--Telegram icon-->
							<a href="https://t.me/atas77channel" rel="nofollow" target=" _blank"> <span
									class="chaty-icon channel-icon-Telegram">
									<span class="chaty-svg">
										<svg width="39" height="39" viewBox="0 0 39 39" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395"
												fill="#3E99D8">
											</circle>
											<path
												d="M3.56917 -2.55497e-07L0 6.42978L7.5349 1.87535L3.56917 -2.55497e-07Z"
												transform="translate(13.9704 24.6145)" fill="#E0E0E0">
											</path>
											<path
												d="M20.8862 0.133954C20.754 0 20.4897 0 20.2253 0L0.396574 8.03723C0.132191 8.17118 0 8.43909 0 8.707C0 8.97491 0.132191 9.24282 0.396574 9.37677L17.5814 17.414C17.7136 17.414 17.7136 17.414 17.8458 17.414C17.978 17.414 18.1102 17.414 18.1102 17.28C18.2424 17.1461 18.3746 17.0121 18.5068 16.7442L21.1506 0.669769C21.1506 0.535815 21.1506 0.267908 20.8862 0.133954Z"
												transform="translate(7.36069 10.9512)" fill="white">
											</path>
											<path d="M13.8801 0L0 11.52V19.4233L3.70136 13.2614L13.8801 0Z"
												transform="translate(13.9704 11.6208)" fill="#F2F2F2">
											</path>
										</svg>
									</span>
								</span>
							</a>


							<!--Twitter icon-->

							<a style="background-color: white; border-radius: 40px; text-align: -webkit-center;"
								href=" https://x.com/atascasinomy" rel="nofollow" target=" _blank"><svg
									xmlns="http://www.w3.org/2000/svg" width="20" height="39" fill="currentColor"
									class="bi bi-twitter" viewBox="0 0 16 16">
									<path
										d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
								</svg></a>



							<!--whatsapp icon-->

							<a href="https://rebrand.ly/ATASxSEO2P" rel="nofollow" target="_blank">
								<span class="chaty-icon channel-icon-Whatsapp">
									<span class="chaty-svg">
										<svg width="39" height="39" viewBox="0 0 39 39" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395"
												fill="#49E670">
											</circle>
											<path
												d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z"
												transform="translate(12.9597 12.9597)" fill="#FAFAFA">
											</path>
											<path
												d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z"
												transform="translate(7.7758 7.77582)" fill="white" stroke="white"
												stroke-width="0.2">
											</path>
										</svg>
									</span>
								</span>
							</a>
						</div>
					</article>

				</div>





				<!--right-->
				<div style="padding: 0px;" class="col-sm-12 col-md-3 mobile_col">
					<div class="right">
						<Right />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Left from '../components/Left.vue';
import Right from '../components/Rightside.vue';
export default {
	name: 'Home',
	components: {
		Left,
		Right
	},
	data() {
		return {
			link2: ""
		}
	},
	computed: {
		...mapGetters(['link'])
	},
	methods: {
		scrollTo(id) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		},
		async calllink2() {
			try {
				const response = await axios.get('https://seo.mobileapplab.online/api/atas?fields[0]=ataskasino_com', {
					headers: {
						"Authorization": "Bearer " + "1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021",
					}
				});
				this.link2 = response.data.data.attributes.ataskasino_com;

			} catch (error) {
				console.error(error);
			}
		},


	},
	mounted() {
		this.$store.dispatch('fetchLink');
		this.calllink2();
	}

};
</script>

<style scoped>
.icon_col {
	display: grid;
	gap: 0.5rem;
	position: fixed;
	bottom: 230px;
	left: 16px;
	z-index: 9999;
}



.icon {
	display: grid;
	position: absolute;
	gap: 0.5rem;
}

.nav-item {
	font-weight: bolder;
}

.chaty-icon.channel-icon-Facebook {
	background-color: white;
	/* Dark blue background */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	/* Makes the icon circular */
	width: 50px;
	/* Adjust width as needed */
	height: 50px;
	/* Adjust height as needed */
	padding: 5px;
	/* Adjust padding as needed */
}

.chaty-icon.channel-icon-Facebook svg {
	fill: #3b5998;
	/* White color for the 'f' */
}

.left {
	background-color: silver;
	padding: 0px 15px 15px 15px;
	height: 100%;
}

.right {
	background-color: silver;
	padding: 0px 15px 15px 15px;
	height: 100%;
}

.nav-pills {
	--bs-nav-pills-link-active-bg: #31CD84;
	font-size: 12px;
}

.nav-link {
	color: #666666D9;
	/* 默认状态下的字体颜色 */
}

.nav-link.active {
	color: #ffffff;
	/* 激活状态下的字体颜色 */
}

.nav-link.active {
	border-radius: 30px;
}

.menu_col {
	padding-bottom: 10px;
}

.main-col {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-items: center;
	gap: 1.3rem;
}

.main-col img {
	width: 90%;
}

@media screen and (max-width:768px) {
	.main-col {
		grid-template-columns: repeat(3, 1fr);
	}


}

@media screen and (max-width:767px) {
	.mobile_col {
		order: 2;
	}

	.mobile_col2 {
		order: 3;
	}
}

@media screen and (max-width:425px) {
	.maps {
		font-size: 12px;
	}
}


.menu {
	display: flex;
}

.text {
	text-decoration: none;
	font-weight: bolder;
}

.text2 {
	text-decoration: none;
	font-weight: bolder;
	color: #ef7a43;
}

h1 {
	font-size: 25px;
	font-weight: 700;
}

h2 {
	font-size: 23px;
	font-weight: 700;
}

h3 {
	font-size: 18px;
	font-weight: 700;
}
</style>
