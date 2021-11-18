<template>
	<div id="main-container">
		<img id="background" src="~@/assets/raw/gradient.svg" />
		<div class="logo">
			<TrashableLogo></TrashableLogo>
		</div>
		<p id="title">TRASHABLE</p>
		<div id="user-logo" class="logo">
			<UserLogo></UserLogo>
		</div>
		<GoogleSignIn :redirect="Auth.GoogleSignInURL" class="button-login"></GoogleSignIn>
		<DiscordSignIn :redirect="Auth.DiscordSignInURL" class="button-login"></DiscordSignIn>
		<Button size="normal" id="to-site">Catre site</Button>
		<ReturnButton></ReturnButton>
	</div>
</template>

<script lang="ts" setup>
import DiscordSignIn from '@/components/modules/account/DiscordSignIn.vue';
import GoogleSignIn from '@/components/modules/account/GoogleSignIn.vue';
import Button from '@/components/ui/Button.vue';
import ReturnButton from '@/components/ui/ReturnButton.vue';
import TrashableLogo from '@/components/icons/TrashableLogo.vue';
import UserLogo from '@/components/icons/UserLogo.vue';

import { Auth } from '@trashable/hydrogen';
</script>
<style scoped>
.button-login {
	width: 60%;
	max-width: 20rem;
	height: 2rem;
}
#main-container {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}
#to-site {
	height: 2.4rem;
	width: 38%;
	max-width: 12rem;
}
#title {
	color: var(--text-color);
	font-size: 2rem;
	letter-spacing: 0.12em;
}
.logo {
	width: 25%;
	height: 20%;
	max-height: 4rem;
}
#user-logo {
	fill: #ffffff;
}

#background {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
}
</style>
