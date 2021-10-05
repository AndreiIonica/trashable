import MyItem from '../../components/modules/map/ClosestMenuItem.vue';

export default {
	title: 'Map/ClosestMenu/Item',
	component: MyItem,
};

const Template = args => ({
	components: { MyItem },
	setup() {
		return { args };
	},
	template: '<MyItem v-bind="args"/>',
});

export const MenuItem = Template.bind({});
MenuItem.args = {
	distance: '5 m',
	markerColor: '#ffffff',
};
