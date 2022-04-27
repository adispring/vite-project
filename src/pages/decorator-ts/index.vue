<template>
  <div>
    <div>{{ title }}</div>
    <Button @click="onClick" />
    <div>{{ formatCount(count) }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from '@/components/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class YourComponent extends Vue {
  @Prop({ default: 'decorator ts' }) readonly title!: string;

  count = 0;

  formatCount(count: number): string {
    return `点击了 ${count} 次`;
  }

  onClick(e: PointerEvent): void {
    console.log('Button Clicked: ', e);
    this.count++;
  }
}
</script>
