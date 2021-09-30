<template>
	<div id="main-container">
		<Overlay id="overlay" />
	</div>
</template>

<script lang="ts" setup>
import Overlay from '@/components/modules/map/Overlay.vue';
</script>

<style scoped>
#main-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#overlay {
	width: 100%;
	height: 100%;
}
</style>
