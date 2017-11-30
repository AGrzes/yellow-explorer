import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-declarative-view', {
  render: function (createElement) {
    return createElement(
      `yellow-${_.kebabCase(this.config.contents[0].type)}`,   // tag name
      this.$slots.default // array of children
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
