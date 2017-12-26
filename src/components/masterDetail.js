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
    const masterElement = createElement('div', {
      class: ['col-xs-3']
    }, _([this.config.master]).flatten().map(createMaster).value())
    const elements = [masterElement]
    if (this.activeItem) {
      const detailElement = createElement('div', {
        class: ['col-xs-9']
      }, _([this.config.detail]).flatten().map(createDetail).value())
      elements.push(detailElement)
    }
    return createElement('div', {
      class: ['row']
    }, elements)
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
