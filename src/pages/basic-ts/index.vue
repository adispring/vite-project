<template>
  <div>
    <div>{{ title }}</div>
    <Button @click="onClick" />
    <div>{{ formatCount(count) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/button.vue';

export default Vue.extend({
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: 'basic ts title',
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    formatCount(count: number): string {
      return `点击了 ${count} 次`;
    },
    onClick(e: PointerEvent): void {
      console.log('Button Clicked: ', e);
      this.count++;
    },
  },
});
</script>
