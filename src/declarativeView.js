import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-declarative-view', {
  render: function (createElement) {
    return createElement(
      `yellow-${_.kebabCase(this.config.contents[0].type)}`, {
        props: {
          config: this.config.contents[0]
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
