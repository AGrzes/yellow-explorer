import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-list', {
  render: function (createElement) {
    return createElement(
      'b','list'
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
