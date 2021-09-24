<template>
	<Button size="normal">
		<ReturnIcon id="icon" />
	</Button>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/Button.vue';
import ReturnIcon from '@/components/icons/ReturnIcon.vue';
</script>

<style scoped>
button {
	width: 4em;
	height: 3em;
}

#icon {
	width: 80%;
}
</style>
