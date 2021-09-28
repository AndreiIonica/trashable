<template>
	<div id="main-container">
		<div class="logo">
			<TrashableLogo></TrashableLogo>
		</div>
		<p id="title">TRASHABLE</p>
		<div id="user-logo" class="logo">
			<UserLogo></UserLogo>
		</div>
		<GoogleSignIn class="button-login"></GoogleSignIn>
		<DiscordSignIn class="button-login"></DiscordSignIn>
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
</script>

<style scoped>
.button-login {
	width: 60%;
	height: 2rem;
	margin: 2.5%;
}
#main-container {
	background-image: url('~@/assets/raw/gradient.svg');

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#to-site {
	height: 2.4rem;
	width: 38%;
	margin-top: 5%;
	margin-bottom: 2.5%;
}
#title {
	margin: 2.5%;
	color: var(--text-color);
	font-size: 2rem;
	letter-spacing: 0.12em;
}
.logo {
	width: 25%;
	margin: 5%;
}
#user-logo {
	fill: #ffffff;
	margin-top: 8%;
}
</style>
