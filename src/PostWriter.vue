<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">Post Title</div>
          <div class="control">
            <input type="text" v-model="title" class="input">
            {{ title }}
          </div>
        </div>
      </div>

      <div class="colunns">
        <div class="column is-one-half">
          <div class="contenteditable" id="markdown" ref="contentEditable" />
        </div>
        <div class="column is-one-half"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Post } from './types'

export default defineComponent({
  name: 'PostWriter',

  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  },

  setup(props) {
    const title = ref(props.post.title)
    const contentEditable = ref<null | HTMLDivElement>(null)

    onMounted(() => {
      console.log(contentEditable.value)
    })

    return {
      title,
      contentEditable
    }
  }
})
</script>
