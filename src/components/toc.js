import Vue from 'vue'
import _ from 'lodash'

const createTree = (createElement,nodes,wrapper,component)=>{
  wrapper = wrapper || 'ul'
  const itemWrapper = `yellow-${_.kebabCase(component.config.item.type)}`
  return createElement(
    wrapper,_.map(nodes,(node)=>createElement('li',[createElement(itemWrapper,{
      props: {
        config: component.config.item,
        data: node.node
      },on: {
        activate: (event)=> component.$emit('activate',event)
      }
    }),createTree(createElement,node.children,wrapper,component)]))
  )
}
Vue.component('yellow-toc', {
  render: function (createElement) {
    return createTree(createElement,this.items,'ul',this)
  },
  data(){
    let items
    if (this.config.data.selector){
      const filter = new Function('any','return '+this.config.data.selector.replace(/this/g,'any'))
      items = _.filter(this.$root.data.model,filter)
    }
    if (this.config.data.order){
      items = _.orderBy(items,this.config.data.order.field)
    }
    if (this.config.children){
      const childConstructor = new Function('return '+this.config.children)
      const toTree = (item)=>({node:item,children:_.map(childConstructor.apply(item),toTree)})
      items = _.map(items,toTree)
    } else {
      items = _.map(items,(item)=>({node:item}))
    }
    return {
      items:items
    }
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    active: {
      type: Object,
      required: false
    }
  }
})
