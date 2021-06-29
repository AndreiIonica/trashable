<template>
	<div id="control-container">
		<button class="btn-tall" @click="focusMap">Focus</button>
		<button class="btn-tall" @click="findClosest">Closest</button>
		<button class="btn-tall" @click="logOut">Log Out</button>
	</div>
</template>

<script>
export default {
	methods: {
		focusMap() {
			this.$emit('focus');
		},
		findClosest() {
			this.$emit('closest');
		},
		logOut() {
			this.$emit('logout');
		},
	},
};
</script>

<style scoped>
#control-container {
	background: #282828;
	border: 1px solid #aad6ac;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.btn-tall {
	font-family: Roboto;
	font-weight: bold;
	font-style: normal;
	font-size: 1rem;
	text-align: center;
	background: #aad6ac;
	height: 70%;

	border-radius: 10px;
	width: 31%;
}

@media screen and (max-height: 500px) {
}
</style>
