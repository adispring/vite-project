<template>
  <div>
    {{ propB }}
    <Button />
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
  @Prop(Number) readonly propA: number | undefined;
  @Prop({ default: 'default value' }) readonly propB!: string;
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
}
</script>
