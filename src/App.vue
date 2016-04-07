<template>
  <div id="app">
    <h1>Hex Accordion</h1>
    <hex-accordions>
      <hex-accordion>
        <hex-accordion-tab><h3>Bali</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da hexes.</p>
        </hex-accordion-panel>
      </hex-accordion>

      <hex-accordion>
        <hex-accordion-tab><h3>Dallas</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da Texas.</p>
        </hex-accordion-panel>
      </hex-accordion>
    </hex-accordions>


    <h2>Open on load</h2>
    <hex-accordions>
      <hex-accordion active>
        <hex-accordion-tab><h3>Bali</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da hexes.</p>
        </hex-accordion-panel>
      </hex-accordion>

      <hex-accordion>
        <hex-accordion-tab><h3>Dallas</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da Texas.</p>
        </hex-accordion-panel>
      </hex-accordion>
    </hex-accordions>


    <h2>All the single ladies</h2>
    <hex-accordions single>
      <hex-accordion>
        <hex-accordion-tab><h3>Bali</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da hexes.</p>
        </hex-accordion-panel>
      </hex-accordion>

      <hex-accordion>
        <hex-accordion-tab><h3>Dallas</h3></hex-accordion-tab>
        <hex-accordion-panel>
          <p>Land o' da Texas.</p>
        </hex-accordion-panel>
      </hex-accordion>
    </hex-accordions>
  </div>
</template>

<script>
  import HexAccordions     from './components/HexAccordions.vue';
  import HexAccordion      from './components/HexAccordion.vue';
  import HexAccordionTab   from './components/HexAccordionTab.vue';
  import HexAccordionPanel from './components/HexAccordionPanel.vue';

  export default {
    components: {
      HexAccordions,
      HexAccordion,
      HexAccordionTab,
      HexAccordionPanel
    }
  }
</script>
