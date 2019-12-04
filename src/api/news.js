/*
 * @Author: Rainy
 * @Date: 2018-03-01 18:23:53
 * @Last Modified by: Rainy
 * @Last Modified time: 2018-03-13 17:52:16
 */
import axios from 'axios'

export function getNews () {
  return axios.get('api/news/latest').then((res) => {
    return Promise.resolve(res)
  })
}

export function geNewsContent (id) {
  return axios('api/news/' + id).then(res => {
    return Promise.resolve(res)
  })
}

export function getMoreNews (homepageDateStr) {
  return axios('api/news/before/' + homepageDateStr).then(res => {
    return Promise.resolve(res)
  })
}
