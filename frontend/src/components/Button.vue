<template>
	<button>
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<style scoped>
button {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	width: 10rem;
	height: 3rem;

	background: var(--accent-color);
	color: var(--text-color);
	border-radius: 4rem;
	border: 0;
}
</style>
