import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'
const determineWrapper = (style) => {
  return style == 'list' ? 'ul' : 'div'
}
const determineItemWrapper = (style) => {
  return style == 'list' ? 'li' : 'div'
}
Vue.component('yellow-list', {
  render: function (createElement) {
    const wrapper = determineWrapper(this.config.style)
    const itemWrapper = `yellow-${_.kebabCase(this.config.item.type)}`
    return createElement(
      wrapper,_.map(this.items,(item)=>createElement(itemWrapper,{
        props: {
          config: this.config.item,
          data: item
        }
      }))
    )
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
