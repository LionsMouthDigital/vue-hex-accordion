(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hexAccordion = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var HexAccordions     = _dereq_('./components/HexAccordions.vue');
var HexAccordion      = _dereq_('./components/HexAccordion.vue');
var HexAccordionTab   = _dereq_('./components/HexAccordionTab.vue');
var HexAccordionPanel = _dereq_('./components/HexAccordionPanel.vue');

module.exports = {
  HexAccordions:     HexAccordions,
  HexAccordion:      HexAccordion,
  HexAccordionTab:   HexAccordionTab,
  HexAccordionPanel: HexAccordionPanel,
};

},{"./components/HexAccordion.vue":2,"./components/HexAccordionPanel.vue":3,"./components/HexAccordionTab.vue":4,"./components/HexAccordions.vue":5}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: Boolean
  },

  computed: {
    index: function index() {
      for (var i in this.$parent.$children) {
        if (this.$parent.$children[i].$el === this.$el) {
          return i;
        }
      }
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<!-- Wrap in a div to prevent fragmentation. -->\n<div class=\"accordion\">\n  <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-accordion/src/components/HexAccordion.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],3:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    show: function show() {
      return this.$parent.active;
    },
    tabId: function tabId() {
      if (typeof this.id !== 'undefined') {
        return this.id;
      }

      return ['accordion-group', this.$parent.$parent._uid, 'tab', this.$parent.index].join('-');
    },
    tabPanelId: function tabPanelId() {
      if (typeof this.ariaControls !== 'undefined') {
        return this.ariaControls;
      }

      return ['accordion-group', this.$parent.$parent._uid, 'panel', this.$parent.index].join('-');
    },
    transtion: function transtion() {
      return this.$parent.$parent.effect;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"accordion-panel\" :id=\"tabPanelId\" role=\"tabpanel\" :aria-labelledby=\"tabId\" :aria-hidden=\"!$parent.active.toString()\" v-show=\"show\" :transition=\"transition\">\n  <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-accordion/src/components/HexAccordionPanel.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],4:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: Boolean,
    ariaControls: String,
    id: String
  },

  computed: {
    tabId: function tabId() {
      if (typeof this.id !== 'undefined') {
        return this.id;
      }

      return ['accordion-group', this.$parent.$parent._uid, 'tab', this.$parent.index].join('-');
    },
    tabPanelId: function tabPanelId() {
      if (typeof this.ariaControls !== 'undefined') {
        return this.ariaControls;
      }

      return ['accordion-group', this.$parent.$parent._uid, 'panel', this.$parent.index].join('-');
    }
  },

  methods: {
    toggleAccordion: function toggleAccordion() {
      if (this.$parent.$parent.single) {
        for (var i in this.$parent.$parent.$children) {
          this.$parent.$parent.$children[i].active = false;
        }
      }

      this.$parent.active = !this.$parent.active;
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<button class=\"accordion-tab\" :class=\"{ active: this.$parent.active }\" :id=\"tabId\" role=\"tab\" :aria-controls=\"tabPanelId\" :aria-selected=\"active.toString()\" tabindex=\"0\" @click=\"toggleAccordion\">\n  <slot></slot>\n</button>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-accordion/src/components/HexAccordionTab.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}],5:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    effect: String,

    single: Boolean
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"accordions\" role=\"tablist\">\n  <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-accordion/src/components/HexAccordions.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}]},{},[1])(1)
});