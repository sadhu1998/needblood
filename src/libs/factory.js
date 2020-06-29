import axios from 'axios'
import {Message} from 'element-ui'
import Vue from 'vue'

export default {
    PostService: function (endPoint,payload) {
        return axios({
            url:endPoint,
            method:'POST',
            headers : {'Content-type':'application/json'},
            data: payload
        }).then(function(response) {
            if (response.data.status) {                             
              Message.success(response.data.status)
              return response
            }
            else {
               return response
            }
            return response
          })
    },

    getService: function (endPoint) {
        return axios({
            url:endPoint,
            method:'GET'
        }).then(function(response) {
            if (response.data.status) {
                Message.success(response.data.status)
                return response
            }
            else {
                return response
            }
            return response
            })
    }
}