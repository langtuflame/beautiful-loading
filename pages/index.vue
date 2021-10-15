<template>
  <div class="grid grid-cols-2 gap-x-4 lg:grid-cols-4 justify-items-center mt-20 max-w-screen-xl mx-auto w-full px-4">
    <Tutorial/>
    <spin-strech />
    <loading-spin />
    <loading-ring />
  </div>
</template>

<script>
import LoadingSpin from '../components/LoadingSpin.vue'
import SpinStrech from '../components/SpinStrech.vue'
export default {
  components: { SpinStrech, LoadingSpin },}
</script>
