import stores from '@/stores/index'
import axios from 'axios'

class Api {
  //{optional} requireAuth should be true for any route that requires authorization
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          //jwt for authorized user 
          'Authorization': `Token ${stores.state.auth.jwt}`
        }
      }
      let response = requireAuth ? await axios.get(url, config) : await axios.get(url)
      return response.data
    } catch (error) {
      return error.response
    }
  }

  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${stores.state.auth.jwt}`
        }
      }
      let response = requireAuth ? await axios.post(url, payload, config) : await axios.post(url, payload)
      return response
    } catch (error) {
      return error.response
    }
  }

  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${stores.state.auth.jwt}`
        }
      }
      let response = requireAuth ? await axios.put(url, payload, config) : await axios.put(url, payload)
      return response
    } catch (error) {
      return error.response
    }
  }

  static async delete(url, payload = {}, requireAuth = true) {
    try {
      let config = {
        headers: {
          'Authorization': `Token ${stores.state.auth.jwt}`
        },
        data: payload
      }
      let response = requireAuth ? await axios.delete(url, config) : await axios.delete(url, {data : payload })
      return response
    } catch (error) {
      return error.response
    }
  }
}

export default Api
