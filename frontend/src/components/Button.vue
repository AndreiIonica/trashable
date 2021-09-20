<template>
	<button>
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<style scoped>
button {
	background: var(--accent-color);
	color: #ffffff;
	display: flex;
	flex-direction: row;
	height: 3rem;
	padding: 1rem 2rem;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 4rem;
	border: 0;
}
</style>
