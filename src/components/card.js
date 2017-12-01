import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-card', {
  render: function (createElement) {
    const elements = []
    const createChild = (element) => createElement(`yellow-${_.kebabCase(element.type)}`, {
      props: {
        config: element,
        data: this.data
      }
    })
    if (this.slots.header) {
      elements.push(createElement('div', {
        class: {
          "panel-heading": true
        }
      },[createElement('h3', {
        class: {
          "panel-title": true
        }
      },  _.map(this.slots.header, createChild))]))
    }
    if (this.slots.content) {
      elements.push(createElement('div', {
        class: {
          "panel-body": true
        }
      }, _.map(this.slots.content, createChild)))
    }
    return createElement(
      'div', {
        class: {
          panel: true, "panel-default": true
        }
      }, elements
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
    }
  },
  computed: {
    slots: function () {
      return _.groupBy(this.config.contents, (element) => element.slot || 'content')
    }
  }
})
