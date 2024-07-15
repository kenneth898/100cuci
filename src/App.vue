<!-- src/App.vue -->
<template>
	<div id="app">
		<header>
			<Top />
		</header>
		<main>
			<router-view></router-view>

		</main>
		<footer>
			<Bottom />
		</footer>
	</div>
</template>

<script>
import Bottom from './components/Bottom.vue';
import Top from './components/Top.vue';
import Left from './components/Left.vue';
export default {
	name: 'App',
	components: {
		Bottom,
		Top,
		Left
	}
};
</script>
<style scoped>
main {
	padding-bottom: 80px;
	padding-top: 10px;
}
</style>