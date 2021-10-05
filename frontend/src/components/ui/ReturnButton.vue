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
	width: 4rem;
	height: 3rem;
}

#icon {
	width: 80%;
}
</style>
