import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-field', {
  render: function (createElement) {
    return createElement('span',this.value)
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
      return this.data[this.config.field]
    }
  }
})
