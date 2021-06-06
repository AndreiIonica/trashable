<template>
  <div id="start-container">
    <div id="first">
      <button class="btn-long btn-1" @click="navigateToMap">Start</button>
    </div>
    <div id="second">
      <button class="btn-long" @click="navigateToLogin">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Home View',
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToMap() {
      this.$router.push('/map');
    },
  },
};
</script>

<style scoped>
#start-container {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/earth-whiten.png);
  background-size: 125% 100%;
  background-position-x: center;

  background-repeat: no-repeat;

  display: block;
}
#first {
  padding-top: 40vh;
  text-align: center;
  padding-bottom: 17vh;
}

#second {
  text-align: center;
}

.btn-long {
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1.25rem;
  letter-spacing: 0em;
  text-align: center;
  line-height: 1;

  background: #aad6ac;

  border: 3px solid #000000;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);

  border: 1px solid #000000;
  border-radius: 10px;

  width: 150px;
}

/* For desktop users */
@media (min-aspect-ratio: 245/198) {
  #start-container {
    background: #363f46;
  }
}
</style>
