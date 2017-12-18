import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-switch', {
  render: function (createElement) {
    return createElement(
      `span`
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: false
    }
  }
})
