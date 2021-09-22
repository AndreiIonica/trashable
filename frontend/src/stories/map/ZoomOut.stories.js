import MyZoomOut from '../../components/modules/map/ZoomOut.vue';

export default {
	title: 'Map/ZoomOut',
	component: MyZoomOut,
};

const Template = args => ({
	components: { MyZoomOut },
	setup() {
		return { args };
	},
	template: '<MyZoomOut/>',
});

export const ZoomOut = Template.bind({});
