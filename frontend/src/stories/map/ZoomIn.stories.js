import MyZoomIn from '../../components/modules/map/ZoomIn.vue';

export default {
	title: 'Map/ZoomIn',
	component: MyZoomIn,
};

const Template = args => ({
	components: { MyZoomIn },
	setup() {
		return { args };
	},
	template: '<MyZoomIn/>',
});

export const ZoomIn = Template.bind({});
