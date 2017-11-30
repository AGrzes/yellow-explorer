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
    data(){
      let items
      if (this.config.list.selector){
        const filter = new Function('any','return '+this.config.list.selector.replace(/this/g,'any'))
        items = _.filter(data.model,filter)
      }
      return {
        items:items
      }
    },
    props: {
      config: {
        type: Object,
        required: true
      }
    }
  })
})

