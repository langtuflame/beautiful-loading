<template>
  <div class="grid grid-cols-2 gap-x-4 lg:grid-cols-4 mt-20 max-w-screen-xl mx-auto w-full px-4">
    <Tutorial/>
    <spin-strech />
  </div>
</template>

<script>
import SpinStrech from '../components/SpinStrech.vue'
export default {
  components: { SpinStrech },}
</script>
