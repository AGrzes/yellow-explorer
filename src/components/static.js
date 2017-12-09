import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-static', {
  render: function (createElement) {
    return createElement(
      `span`, {
        domProps: {
          innerHTML: this.config.html
        }
      }
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
