import Vue from 'vue'
import _ from 'lodash'
Vue.component('yellow-list-item', {
  render: function (createElement) {
    const elements = []
    const createChild = (element) => createElement(`yellow-${_.kebabCase(element.type)}`, {
      class: {
        "pull-right": _.includes(element.hint,'right')
      },
      props: {
        config: element,
        data: this.data
      }
    })
    if (this.slots.header || this.slots['sub-header']) {
      elements.push(createElement('h3', [
        ..._.flatMap(this.slots.header, (element)=>[createChild(element),' ']),
        createElement('small',_.flatMap(this.slots['sub-header'], (element)=>[createChild(element),' ']))]))
    }
    if (this.slots.content) {
      elements.push(..._.map(this.slots.content, createChild))
    }
    return createElement(
      'li', elements
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
