<template>
	<div id="menu">
		<p>MENU</p>

		<div id="items-container">
			<ClosestMenuItem
				v-for="(t, i) in items"
				:key="i"
				:distance="t.distance"
				:markerColor="t.markerColor"
				class="item-child"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ClosestMenuItem from '@/components/modules/map/ClosestMenuItem.vue';

interface IMenuItem {
	markerColor: string;
	distance: string;
}

interface IMenuProps {
	items: IMenuItem[];
}

const props = defineProps<IMenuProps>();

const items = props.items ?? [];
</script>

<style scoped>
#menu {
	width: 100%;
	height: 100%;

	background-color: var(--accent-color);
	color: var(--text-color);

	border: 0;
	border-radius: 4rem;
}

#items-container {
	margin: 0.4rem 0.8rem 0.4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

p {
	text-align: center;
	margin: 0;
}

.item-child {
	width: 50%;
}
</style>
