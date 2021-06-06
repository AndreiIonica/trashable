<template>
  <div id="login-container">
    <input type="email" class="input-text" id="first" v-model="email" @click="clearEmail" />
    <input type="password" class="input-text" id="second" v-model="password" @click="clearPass" />
    <div id="third">
      <button class="btn-tall" @click="validateSignUp">Sign Up</button>
      <button class="btn-tall" @click="validateLogIn">Log In</button>
    </div>
  </div>
</template>

<script>
import { signup, login } from '../lib/DataManager';

export default {
  // CSS placeholder works in dev mode but doesn't when i build it so i have to do this
  data() {
    return {
      email: 'Email',
      password: 'password',
    };
  },
  methods: {
    async validateSignUp() {
      if (!this.email || !this.password) {
        alert('Please fill in email and password');
        return;
      }
      try {
        const token = await signup(this.email, this.password, 'Default Username');

        this.$token = token;
        this.$router.push('/map');
      } catch (e) {
        const { data } = e.response;
        if (data.errors) alert(data.errors.join('\n'));
        else alert(data.message);
      }
    },
    async validateLogIn() {
      if (!this.email || !this.password) {
        alert('Please fill in email and password');
        return;
      }
      try {
        const token = await login(this.email, this.password);

        this.$token = token;
        this.$router.push('/map');
      } catch (e) {
        const { data } = e.response;
        if (data.errors) alert(data.errors.join('\n'));
        else alert(data.message);
      }
    },
    clearEmail() {
      if (this.email === 'Email') this.email = null;
    },
    clearPass() {
      if (this.password === 'password') this.password = null;
    },
  },
};
</script>

<style scoped>
#login-container {
  /* background: #000000; */
  width: 100%;
  height: 100vh;
  background-image: url(../assets/earth-whiten.png);
  background-size: 130% 100%;
  background-position-x: center;

  background-repeat: no-repeat;
  text-align: center;
}
#first {
  margin-top: 30vh;
}
#second {
  margin-top: 8vh;
}
#third {
  margin-top: 13vh;
  width: 100%;
  text-align: center;
}

.input-text {
  background: #e5e5e5;
  border: 1px solid #00897b;
  height: 7%;
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0em;
  width: 50%;
  border-radius: 10px;
}

.btn-tall {
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  background: #aad6ac;

  padding-top: 3%;
  padding-bottom: 3%;

  border-radius: 10px;
  width: 40%;
  margin: 0 2%;
}
</style>
