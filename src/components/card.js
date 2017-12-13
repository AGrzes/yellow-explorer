import Vue from 'vue'
import _ from 'lodash'
import './card.css'
Vue.component('yellow-card', {
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
    if (this.slots.header) {
      elements.push(createElement('div', {
        class: {
          "panel-heading": true
        }
      },[createElement('h3', {
        class: {
          "panel-title": true
        }
      },  _.flatMap(this.slots.header, (element)=>[createChild(element),' ']))]))
    }
    if (this.slots.content) {
      elements.push(createElement('transition',{props:{name:'fade'}},[this.active?createElement('div', {
        class: {
          "panel-body": true
        }
      }, _.map(this.slots.content, createChild)):null]))
    }
    return createElement(
      'div', {
        class: {
          panel: true, 
          "panel-default": true
        },
        on: {
          click: _.includes(this.config.hint,'collapse')?this.toggle:null
        }
      }, elements
    )
  },
  methods: {
    toggle(){
      this.active = !this.active
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
  data(){
    return {
      active :!_.includes(this.config.hint,'collapse')
    } 
  },
  computed: {
    slots: function () {
      return _.groupBy(this.config.contents, (element) => element.slot || 'content')
    }
  }
})
