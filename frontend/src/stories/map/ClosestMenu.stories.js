import MyMenu from '../../components/modules/map/ClosestMenu.vue';

export default {
	title: 'Map/ClosestMenu/Main',
	component: MyMenu,
};

const Template = args => ({
	components: { MyMenu },
	setup() {
		return { args };
	},
	template: '<MyMenu v-bind="args"/>',
});

export const Menu = Template.bind({});
Menu.args = {
	pins: [
		{
			markerColor: '#CB2B3E',
			distance: '5 m',
		},
		{
			markerColor: '#2AAD27',
			distance: '6 m',
		},
		{
			markerColor: '#2A81CB',
			distance: '7 m',
		},
		{
			markerColor: '#FFD326',
			distance: '8 m',
		},
	],
	recyclingCenter: {
		markerColor: '#FFFFFF',
		distance: '8 m',
	},
};
