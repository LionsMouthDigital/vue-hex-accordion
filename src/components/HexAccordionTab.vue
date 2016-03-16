<template>
  <button
    class          = "accordion-tab"
    :class         = "{ active: this.$parent.active }"
    :id            = "tabId"
    role           = "tab"
    :aria-controls = "tabPanelId"
    :aria-selected = "active.toString()"
    tabindex       = "0"
    @click         = "toggleAccordion"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      active:       Boolean,
      ariaControls: String,
      id:           String,
    },

    computed: {
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
    },

    methods: {
      /**
       * Toggle the accordion panel's visibility.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      toggleAccordion() {
        // If the accordion group is set to single mode, close any open accordions.
        if (this.$parent.$parent.single) {
          for (var i in this.$parent.$parent.$children) {
            this.$parent.$parent.$children[i].active = false;
          }
        }

        this.$parent.active = !this.$parent.active;
      }
    }
  }
</script>
