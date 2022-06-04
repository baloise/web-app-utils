<script setup lang="ts">
export interface Props {
  size?: 'fullwidth' | 'half' | 'one-third' | 'two-thirds'
}

withDefaults(defineProps<Props>(), {
  size: 'fullwidth',
})
</script>

<template>
  <div
    :class="{
      'column': true,
      'py-0': true,
      'is-12': size === 'fullwidth' || size === undefined,
      'is-6': size === 'half',
      'is-3': size === 'one-third',
      'is-9': size === 'two-thirds',
    }"
  >
    <slot></slot>
  </div>
</template>
