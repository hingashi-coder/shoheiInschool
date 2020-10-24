<template>
  <div>
    <div id="watch">
      <iframe src="https://video.ibm.com/embed/23995650" style="border: 0; margin: 0 auto;" webkitallowfullscreen allowfullscreen frameborder="no" :width="deviceWidth" :height="deviceWidth * 0.5625" ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deviceWidth: this.calcwidth()
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.deviceWidth = this.calcwidth()
    })
  },
  methods: {
    calcwidth: function () {
      const marginWeight = 1
      const widescreenRatio = 0.562
      const topbarHeight = 50 + 1 // `1` is added as safety margin to avoid y-axis overflow.
      let width = window.innerWidth
      let height = window.innerHeight
      if (width * widescreenRatio > height - topbarHeight) {
        width = (height - topbarHeight) / widescreenRatio
      }
      return width * marginWeight
    }
  }

}
</script>

<style scoped>
  #watch{
    display: flex;
  }
  #player{
    margin: 0 auto;
  }
</style>
