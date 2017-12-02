import Vue from 'vue'
import _ from 'lodash'
import {markdown} from 'markdown'
import Handlebars from 'handlebars'
Vue.component('yellow-field', {
  render: function (createElement) {
    if (this.value){
      return createElement('span',{domProps: {
        innerHTML: this.value
      }, class:{
        badge: this.config.decoration == 'badge'
      }})
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
    }
  },
  computed: {
    value: function () {
      const raw = this.data[this.config.field]
      if (raw){
        let formatted = ((value,format)=>{
          switch(this.config.format){
            case 'markdown': 
            return markdown.toHTML(raw)
            case 'string':
            default:
            return raw
          }
        })(raw,this.config.format)
        if (this.config.pattern){
          return Handlebars.compile(this.config.pattern)(formatted)
        }
        return formatted 
      } else {
        return null
      }
    }
  }
})
