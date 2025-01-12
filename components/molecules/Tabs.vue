<template>
  <div>
    <v-tabs
      v-model="tab"
      :grow
      :density
    >
      <v-tab
        v-for="item in items"
        :key="item.key"
        :value="item.key"
        :base-color="item.baseColor || bgColor"
        :color="item.activeColor || activeColor"
        :slider-color="sliderColor"
        :variant
        @click="emits('click', item.item)"
      >
        <span :class="fontSize">{{ item.title }}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item.key"
        :value="item.key"
      >
        <slot name="content" v-bind="item" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
type Item = {
  title: string
  key: string
  item: any
  baseColor?: string
  activeColor?: string
}
const props = defineProps({
  modelValue: {
    type: String,
    default: undefined,
    // require: true,
  },
  grow: {
    type: Boolean,
    default: false,
  },
  density: {
    type: String as () => 'default' | 'comfortable' | 'compact',
    default: 'default',
  },
  fontSize: {
    type: String as () => 'small' | 'medium' | 'large',
    default: 'medium ',
  },
  bgColor: {
    type: String,
    default: 'white',
  },
  activeColor: {
    type: String,
    default: 'primary',
  },
  sliderColor: {
    type: String,
    default: 'white',
  },
  variant: {
    type: String as () => 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain',
    default: 'flat'
  },
  items: {
    type: Array as () => Item[],
    require: true,
    default: []
  }
})
const emits = defineEmits([
  'update:modelValue',
  'click'
])
const localTab = ref('')
const tab = computed({
  get() {
    return props.modelValue || localTab.value
  },
  set(v: string) {
    localTab.value = v
    emits('update:modelValue', v)
  }
})

const fontSizeMapper = {
  small: 'text-caption',
  medium : 'text-button',
  large: 'text-subtitle-1',
}
const fontSize = computed(() => fontSizeMapper[props.fontSize])
</script>

<style scoped>

</style>