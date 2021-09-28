<template>
	<div id="menu">
		<p>MENIU</p>

		<div id="items-container">
			<ClosestMenuItem
				v-for="(t, i) in props.pins"
				:key="i"
				:distance="t.distance"
				:markerColor="t.markerColor"
				class="item-child"
			>
				<MarkerIcon />
			</ClosestMenuItem>
			<ClosestMenuItem
				:distance="props.recyclingCenter.distance"
				:markerColor="props.recyclingCenter.markerColor"
				class="item-child"
			>
				<RecyclingCenterIcon />
			</ClosestMenuItem>
			<ReturnButton />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ClosestMenuItem from '@/components/modules/map/ClosestMenuItem.vue';
import MarkerIcon from '@/components/icons/MarkerIcon.vue';
import ReturnButton from '@/components/ui/ReturnButton.vue';
import RecyclingCenterIcon from '@/components/icons/RecyclingCenterIcon.vue';

interface IMenuItem {
	markerColor: string;
	distance: string;
}

interface IMenuProps {
	pins: IMenuItem[];
	recyclingCenter: IMenuItem;
}

const props = defineProps<IMenuProps>();
</script>

<style scoped>
#menu {
	width: 100%;
	height: 100%;

	background-color: var(--accent-color);
	color: var(--text-color);

	border: 0;
	border-radius: 2rem;
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
	font-size: 1.2rem;
}

.item-child {
	width: 50%;
}
</style>
