<template>
  <div>
    <input type="password" v-model="request">
    <input type="button" value="ログイン" @click="login">
  </div>
</template>

<script>
const pass = 'test'
export default {
  data () {
    return {
      request: ''
    }
  },
  methods: {
    login () {
      if (this.request === pass) {
        this.$emit('pageMove', 'watch')
      } else {
        alert('NG')
      }
    }
  }
}
</script>

<style>

</style>
