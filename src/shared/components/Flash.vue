<template>
  <div :class="$style.Flash">
    <span v-for="i in 5" :key="i" ref="i" />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.refs)
  },
  methods: {
    animate() {

    }
  }
}
</script>

<style lang="scss" scoped module>
.Flash {
  span {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  span:nth-child(1) {
    left: 10%;
    bottom: -10%;
    height: 30%;
    width: 2px;
    background-color: $white;
  }
  span:nth-child(2) {
    left: 30%;
    bottom: 0;
    height: 50%;
    width: 1px;
    background-color: $white;
  }
  span:nth-child(3) {
    left: 45%;
    bottom: -5%;
    height: 30%;
    width: 2px;
    background-color: $white;
  }
  span:nth-child(4) {
    left: 60%;
    bottom: 5%;
    height: 40%;
    width: 2px;
    background-color: $white;
  }
  span:nth-child(5) {
    left: 80%;
    bottom: -7%;
    height: 30%;
    width: 1px;
    background-color: $white;
  }
}
</style>
