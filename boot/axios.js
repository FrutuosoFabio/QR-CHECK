import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'http://10.200.0.239/qrcheck/public/api'
axios.defaults.baseURL = 'http://detin.saude.am.gov.br:8600/api'
axios.defaults.headers.common = {
  Authorization: 'Bearer A6Q4Jyvj8rux4rGq'
}
Vue.prototype.$axios = axios
