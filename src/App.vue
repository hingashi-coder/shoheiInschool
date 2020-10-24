<template>
  <div style="width:100vw;">
    <navibar
      :title="title"
    ></navibar>
    <component
      :is="currentView"
      @pageMove = "pageMove"
    />
  </div>
</template>

<script>
import navibar from './components/navibar'
import login from './components/login'
import watch from './components/watch'

export default {
  components: {
    navibar,
    login,
    watch
  },
  data () {
    return {
      title: 'ログイン',
      currentView: 'login'
    }
  },
  methods: {
    pageMove (target) {
      this.currentView = target
    }
  }
}
</script>

<style>
  body {
    width:100vw;
    margin: 0;
  }
</style>
