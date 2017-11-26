import Vue from 'vue'
import routerPromise from './route'
import './menu'
import configPromise from './config'
import metadataPromise from './metadata'
import dataPromise from './data'
Promise.all([configPromise,metadataPromise,dataPromise,routerPromise]).then(([config,metadata,data,router])=>{
  var app = new Vue({
    el: 'body .container',
    router,
    data: {
      config,
      metadata,
      data
    }
  })
   
})
