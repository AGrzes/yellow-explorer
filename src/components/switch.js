import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-switch', {
  render: function (createElement) {
    const key = this.data[this.config.case.field]
    const caseConfig = this.config.when[key] || this.config.when['default']
    if (caseConfig){
      return createElement(
        `yellow-${_.kebabCase(caseConfig.type)}`,{props: {
          config: caseConfig,
          data: this.data
        }}
      )
    }
    
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: false
    }
  }
})
