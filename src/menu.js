import Vue from 'vue'


Vue.component('main-menu', {
  props:['menu'],
  template: `
  <nav class="navbar navbar-default">
    <ul class="nav navbar-nav">
        <router-link :key="menuItem.name" v-for="menuItem in menu" tag="li" :to="{name:menuItem.name}" active-class="active"><a>{{menuItem.name}}</a></router-link>
    </ul>
  </nav>
  `
}) 
