<template>
<section class="section">
  <div class="container">
    <timeline />
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './Timeline.vue'

export default defineComponent({
  components: {
    Timeline
  },
  name: 'App'
})
</script>
