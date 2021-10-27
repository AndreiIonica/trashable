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
				@click="emit('closest', i + 1)"
			>
				<MarkerIcon />
			</ClosestMenuItem>
			<ClosestMenuItem
				:distance="props.recyclingCenter.distance"
				:markerColor="props.recyclingCenter.markerColor"
				class="item-child"
				@click="emit('closest', pins.length + 1)"
			>
				<!--
						Emmiting pins.length + 1 because recycling center is always the last one in the list
						and the array is 1-indexed
				-->
				<RecyclingCenterIcon />
			</ClosestMenuItem>
			<ReturnButton @click="emit('back')" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
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

interface IMenuEmits {
	(e: 'back'): void;
	(e: 'closest', id: number): void;
}

const emit = defineEmits<IMenuEmits>();
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
