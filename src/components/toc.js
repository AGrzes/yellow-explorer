import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-toc', {
  render: function (createElement) {
    const wrapper = 'ul'
    const itemWrapper = `yellow-${_.kebabCase(this.config.item.type)}`
    return createElement(
      wrapper,_.map(this.items,(item)=>createElement('li',[createElement(itemWrapper,{
        props: {
          config: this.config.item,
          data: item
        },on: {
          activate: (event)=> this.$emit('activate',event)
        }
      })]))
    )
  },
  data(){
    let items
    if (this.config.data.selector){
      const filter = new Function('any','return '+this.config.data.selector.replace(/this/g,'any'))
      items = _.filter(this.$root.data.model,filter)
    }
    if (this.config.data.order){
      items = _.orderBy(items,this.config.data.order.field)
    }
    return {
      items:items
    }
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
