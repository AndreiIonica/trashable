<template>
	<button>
		<RecyclingCenterIcon class="icon fill" />
		{{ props.distance }}
		<FocusIcon class="icon" />
	</button>
</template>

<script lang="ts" setup>
import RecyclingCenterIcon from '@/components/icons/RecyclingCenterIcon.vue';
import FocusIcon from '@/components/icons/FocusIcon.vue';
import { defineProps } from 'vue';

interface IMenuItemProps {
	distance: string;
	markerColor: string;
}

const props = defineProps<IMenuItemProps>();
</script>

<style scoped>
button {
	width: 5rem;
	background-color: transparent;
	/* background: var(--accent-color); */

	background-repeat: no-repeat;
	border: none;

	color: var(--text-color);

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	font-size: 1.1rem;
	padding: 0;
}

.fill {
	fill: v-bind('props.markerColor');
}

.icon {
	width: 1.5rem;
	height: 1.5rem;
}
</style>
