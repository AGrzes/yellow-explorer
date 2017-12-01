import Vue from 'vue'
import _ from 'lodash'
import {markdown} from 'markdown'
Vue.component('yellow-field', {
  render: function (createElement) {
    return createElement('span',{domProps: {
      innerHTML: this.value
    }})
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    value: function () {
      const raw = this.data[this.config.field]
      switch(this.config.format){
        case 'markdown': 
        return markdown.toHTML(raw)
        case 'string':
        default:
        return raw
      }
       
    }
  }
})
