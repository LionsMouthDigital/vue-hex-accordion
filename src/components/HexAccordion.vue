<template>
  <!-- Wrap in a div to prevent fragmentation. -->
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      // This shows/hides the accordion panel.
      // Used in `accordion-tab.vue` and `accordion-panel.vue`.
      active: Boolean,
    },

    computed: {
      // Set the index by looping through all children of the parent (this and its siblings).
      index() {
        for (var i in this.$parent.$children) {
          if (this.$parent.$children[i].$el === this.$el) {
            return i;
          }
        }
      },
    },
  }
</script>
