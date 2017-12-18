import Vue from 'vue'
import _ from 'lodash'

Vue.component('yellow-master-detail', {
  render: function (createElement) {
    const createMaster = (config) => createElement(`yellow-${_.kebabCase(config.type)}`, {
      props: {
        config: config,
        active: this.activeItem
      },
      on: {
        activate: (active) => this.activeItem = active
      }
    })
    const createDetail = (config) => createElement(`yellow-${_.kebabCase(config.type)}`, {
      props: {
        config: config,
        data: this.activeItem
      }
    })
    return createElement(
      'div', _.flatten([_([this.config.master]).flatten().map(createMaster).value(), _([this.config.detail]).flatten().map(createDetail).value()])
    )
  },
  data() {
    return {
      activeItem: null
    }
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
})
