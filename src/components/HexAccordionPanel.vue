<template>
  <div
    class            = "accordion-panel"
    :id              = "tabPanelId"
    role             = "tabpanel"
    :aria-labelledby = "tabId"
    :aria-hidden     = "!$parent.active.toString()"
    v-show           = "show"
    :transition      = "transition"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      show() {
        return this.$parent.active;
      },

      tabId() {
        // Allow the dev to override the `id`.
        if (typeof this.id !== 'undefined') {
          return this.id;
        }

        return [
          'accordion-group',
          this.$parent.$parent._uid,
          'tab',
          this.$parent.index
        ].join('-');
      },

      tabPanelId() {
        // Allow the dev to override the `aria-controls`.
        if (typeof this.ariaControls !== 'undefined') {
          return this.ariaControls;
        }

        return [
          'accordion-group',
          this.$parent.$parent._uid,
          'panel',
          this.$parent.index
        ].join('-');
      },

      transtion() {
        return this.$parent.$parent.effect;
      },
    },
  }
</script>
