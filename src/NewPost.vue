<template>
  <post-writer :post="post" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostWriter from './PostWriter.vue'
import { Post } from './types'
import moment from 'moment'

export default defineComponent({
  name: 'NewPost',
  components: {
    PostWriter,
  },

  setup() {
    const post: Post = {
      id: -1,
      title: 'New Post',
      markdown: "## New Post\nEnter your post here...",
      html: '',
      created: moment(),
      authorId: 0
    }
    return {
      post
    }
  }
})
</script>
