import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-toc', {
  render: function (createElement) {
    return createElement(
      `span`, 
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    active: {
      type: Object,
      required: false
    }
  }
})
