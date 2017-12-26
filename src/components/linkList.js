import Vue from 'vue'
import _ from 'lodash'
import dataPromise from '../data'
import Handlebars from 'handlebars'
Vue.component('yellow-link-list', {
  render: function (createElement) {
    const wrapper = 'ul'
    const itemWrapper = 'li'
    return createElement(
      wrapper, _.map(this.items, (item) =>
        createElement(itemWrapper, {
          domProps: {
            innerHTML: this.expression(item)
          }
        }))
    )
  },
  data() {
    let items, expression
    if (this.config.data.constructor) {
      const constructor = new Function('return ' + this.config.data.constructor)
      items = constructor.apply(this.data)
    }
    if (this.config.label.field) {
      expression = Handlebars.compile(`{{${this.config.label.field}}}`)
    }
    if (this.config.label.expression) {
      expression = Handlebars.compile(this.config.label.expression)
    }
    return {
      items,
      expression
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
