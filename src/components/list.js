import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'
const determineWrapper = (style) => {
  return this.config.style == 'list' ? 'ul' : 'div'
}
Vue.component('yellow-list', {
  render: function (createElement) {
    const wrapper = determineWrapper(this.config.style)
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
