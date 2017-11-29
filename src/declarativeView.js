import Vue from 'vue'
import _ from 'lodash'
Vue.component('declarative-view', {
  render: function (createElement) {
    return createElement(
      `_.kebabCase(this.config.contents[0].type)-control`,   // tag name
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
