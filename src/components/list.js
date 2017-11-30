import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'
Vue.component('yellow-list', {
  render: function (createElement) {
    const wrapper = this.config.style == 'list' ? 'ul' : 'div'
    return createElement(
      wrapper,'list'
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
