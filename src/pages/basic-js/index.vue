<template>
  <div>
    <div>{{ title }}</div>
    <Button @click="onClick" />
    <div>{{ formatCount(count) }}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import Button from '@/components/button.vue';

export default {
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: 'basic js title',
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    formatCount(count) {
      return `点击了 ${count} 次`;
    },
    onClick(e) {
      console.log('Button Clicked: ', e);
      this.count++;
    },
  },
};
</script>
