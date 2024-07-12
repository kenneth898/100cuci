<!-- src/App.vue -->
<template>
	<div id="app">
		<header>
			<Top />
		</header>
		<main style="padding-top: 10px;">
			<router-view></router-view>
			<Bottom />
		</main>
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
<style scoped></style>