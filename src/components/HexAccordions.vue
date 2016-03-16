<template>
  <div class="accordions" role="tablist">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      // This gets used for `:transition` in `accordion-panel.vue`.
      effect: String,
      // Set to `true` to allow only one accordion to be open at a time.
      single: Boolean,
    },
  }
</script>
