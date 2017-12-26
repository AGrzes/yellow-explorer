import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'

Vue.component('yellow-link-list', {
  render: function (createElement) {
    const wrapper = 'ul'
    const itemWrapper = 'li'
    return createElement(
      wrapper,_.map(this.items,(item)=>createElement(itemWrapper,{
        
      },item[this.config.label.field]))
    )
  },
  data(){
    let items
    if (this.config.data.constructor){
      const constructor = new Function('return '+this.config.data.constructor)
      items = constructor.apply(this.data)
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
    data: {
      type: Object,
      required: true
    },   
  }
})
