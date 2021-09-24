import MyRecyclingCenter from '../../components/modules/map/RecyclingCenter.vue';

export default {
	title: 'Map/RecyclingCenter',
	component: MyRecyclingCenter,
};

const Template = args => ({
	components: { MyRecyclingCenter },
	setup() {
		return { args };
	},
	template: '<MyRecyclingCenter/>',
});

export const RecyclingCenter = Template.bind({});
