import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/utils/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    //sample request
    /*second Api parameter can be set to true, false or left empty
      depending on authorization
      if route requires authorization set to true
      else ommit it as the default is false
    */
    async getUserDetails(){
      const res = await Api.get('url', true);
    },
    async createUser(){
      const res = await Api.post('url', false)
    },
    async updateUserDeatails(){
      const res = await Api.put('url', true)
    },
    async deleteUser(){
      const res = await Api.delete('url')
    }
  }
})
