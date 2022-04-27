<template>
  <div>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop(Number) readonly propA: number | undefined;
  @Prop({ default: 'default value' }) readonly propB!: string;
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
  onClick(e: PointerEvent): void {
    this.$emit('click', e);
  }
}
</script>
