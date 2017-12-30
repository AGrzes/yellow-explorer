import Vue from 'vue'
import _ from 'lodash'
import marked from 'marked'
import Handlebars from 'handlebars'
import moment from 'moment'
const renderer = new marked.Renderer()
renderer.table = (header, body) => {
  return `<table class="table">
  <thead>
    ${header}
  </thead>
  <tbody>
    ${body}
  </tbody>
</table>
`;
}
Vue.component('yellow-field', {
  render: function (createElement) {
    if (this.value){
      if (this.config.label){
        return createElement('dl', [createElement('dt', [this.config.label]), createElement('dd', {
          domProps: {
            innerHTML: this.value
          },
          class: {
            badge: this.config.decoration == 'badge'
          }
        })])
      } else {
        return createElement('span',{domProps: {
          innerHTML: this.value
        }, class:{
          badge: this.config.decoration == 'badge'
        }})
      }
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
        const formatValue = ((value)=>{
          switch(this.config.format){
            case 'markdown': 
            return marked(value,{renderer})
            case 'date':
              return moment(value).format(this.config.dateFormat)
            case 'string':
            default:
            return value
          }
        })
        let formatted
        if(_.isArray(raw)){
          formatted = _.map(raw,formatValue).join(', ')
        }
        else {
          formatted = formatValue(raw)
        }
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
