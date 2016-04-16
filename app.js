var Vue          = require('vue');
var HexAccordion = require('./src/component.js');

new Vue({
  el: 'body',

  components: {
    HexAccordions:     HexAccordion.HexAccordions,
    HexAccordion:      HexAccordion.HexAccordion,
    HexAccordionTab:   HexAccordion.HexAccordionTab,
    HexAccordionPanel: HexAccordion.HexAccordionPanel,
  },
});
