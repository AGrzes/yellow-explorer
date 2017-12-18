import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-details-link', {
  render: function (createElement) {
    return createElement(
      `a`, {
        domProps: {
          innerHTML: this.config.html
        },
        on: {
          click: () => this.$emit('activate', this.data)
        }
      }, this.data[this.config.label.field]
    )
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
