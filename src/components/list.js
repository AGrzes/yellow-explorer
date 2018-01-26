import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'
const determineWrapper = (style) => {
  return style == 'list' ? 'ul' : 'div'
}
const determineItemWrapper = (style) => {
  return style == 'list' ? 'li' : 'div'
}
dataPromise.then((data)=>{
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
    computed: {
      items() {
        let items
        if (this.config.list.selector) {
          const filter = new Function('parent', 'return ' + this.config.list.selector)
          items = _.filter(data.model, (item) => {
            return filter.call(item, this.data)
          })
        }
        if (this.config.list.order) {
          items = _.orderBy(items, this.config.list.order.field)
        }
        return items
      }
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
})

