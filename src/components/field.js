import Vue from 'vue'
import _ from 'lodash'
import {markdown} from 'markdown'
import Handlebars from 'handlebars'
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
    }
  }
})
