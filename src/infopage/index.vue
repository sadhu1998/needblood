<template>
    <div>
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
        <link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
        <el-card shadow="hover" class="field-card">
          <el-form>  
            <el-form-item label="Blood Group:" prop="bloodgroup" class="label-text">
                    <el-select v-model="fieldData.bloodgroup" placeholder="Your blood group is" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in options"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Country" prop="country" class="label-text">
                    <el-select v-model="fieldData.country" filterable @change="changeCountry" placeholder="Select Country" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in countries"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="State" prop="state" class="label-text">
                    <el-select v-model="fieldData.state" filterable @change="changeState" placeholder="Select State" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in states"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="District" prop="district" class="label-text">
                    <el-select v-model="fieldData.district" filterable @change="changeDistrict" placeholder="Select district" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in districts"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="City" prop="city" class="label-text">
                    <el-select v-model="fieldData.city" filterable @change="changeCity" placeholder="Select City" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in cities"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Town" prop="town" class="label-text">
                    <el-select v-model="fieldData.town" filterable placeholder="Select Town" style="width:100%" class="width-style">
                    <el-option
                        v-for="item in towns"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                    </el-select>
                </el-form-item>
          </el-form>
          <button class="button" @click="getDetails">search</button>
        </el-card>
        <el-card shadow="hover" class="table-card">
                <span v-if="!showTable">Image here</span>
                <div v-if="showTable">
                <span class="text-message" @click="optionalMessage">Leave a Message (optional)</span><br>
                <el-input 
                v-if="optionalFlag"
                v-model="messageText"
                type="textarea"
                :rows="3"
                :cols="20"
                placeholder="Describe your need and emergency" 
                style="width:50%;margin-left:10px;">
                </el-input>
                <button v-if="optionalFlag" class="button" style="margin-left:312px" @click="clickSubmit">SUBMIT</button>
            <table id="firstTable">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>District</th>
                    <th>City</th>
                    <th>town</th>
                    <th>Contact donor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in rows">
                    <td>{{row.username}}</td>
                    <td>{{row.district}}</td>
                    <td>{{row.city}}</td>
                    <td>{{row.town}}</td>
                    <td>
                        <span class="contact-donor" :key="index" v-if="!sentFlag[index]" @click="requestDonor(row,index)">Contact</span>
                        <span class="sent-donor" :key="index" v-if="sentFlag[index]">Sent Successfully!</span>
                    </td>
                    </tr>
                </tbody>
            </table>
                </div>
        </el-card>
    </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
<script>
import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import {Message} from 'element-ui'
import Factory from '../libs/factory.js'
export default {
    data () {
        return {
            showTable : false,
            optionalFlag : false,
            messageText : '',
            textarea : '',
            visible : false,
            rows: [],
            fieldData : {
                bloodgroup:'',
                town:'',
                city:'',
                district:'',
                state:'',
                country:'',
            },
            countries : '',
            states : '',
            districts : '',
            cities : '',
            towns : '',
            options : '',
            requestPayload : {
                to : '',
                message : ''
            },
            sentFlag : [false]
        }
    },
    async created () {
        this.getCountries()
        this.getBloodgroupList()
        console.log(this.$store.state.userData)
        this.$store.state.userName = localStorage.getItem('username')
        
    },
    async mounted () {
    },
    methods : {
        async requestDonor (row,index) {
            console.log(row,index)
            this.requestPayload.to = row.mailid
            this.requestPayload.message = this.messageText
            let _response = await Factory.PostService('http://35.238.212.200:8080/sendmailtodonor',this.requestPayload)
            if (_response.data.status) {
                let flagArray = []
                flagArray = this.sentFlag
                let sentFlag_bkp = this.sentFlag[index]
                this.sentFlag = []
                this.sentFlag[index] = sentFlag_bkp
                this.sentFlag[index] = true
                flagArray[index] = this.sentFlag[index]
                this.sentFlag = flagArray
                console.log(this.sentFlag[index], index)
            }
        },
        clickSubmit () {
          this.optionalFlag = false
        },
        optionalMessage () {
          this.optionalFlag = true
        },
        async getCountries () {

            let _data = await Factory.getService('http://35.238.212.200:8080/getcountrieslist')
            this.countries = _data.data.country
        },
        async getBloodgroupList () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getbloodgroupslist')
            this.options = _data.data.blood_group
        },
        changeCountry () {
            this.getStates()
            this.fieldData.state= ''
            this.fieldData.district = ''
            this.fieldData.city = ''
            this.fieldData.town = ''
        },
        async getStates () {
            let country_payload  = {}
            country_payload.country = this.fieldData.country
            let _data = await Factory.PostService('http://35.238.212.200:8080/getstateslist',country_payload)
            this.states = _data.data.states
        },
        changeState () {
            this.getDistricts()
            this.fieldData.district = ''
            this.fieldData.city = ''
            this.fieldData.town = ''
        },
        async getDistricts () {
            let state_payload  = {}
            state_payload.state = this.fieldData.state
            let _data = await Factory.PostService('http://35.238.212.200:8080/getdistrictslist',state_payload)
            this.districts = _data.data.districts
        },
        changeDistrict () {
            this.getCities()
            this.fieldData.city = ''
            this.fieldData.town = ''
        },
        async getCities () {
            let district_payload  = {}
            district_payload.district = this.fieldData.district
            let _data = await Factory.PostService('http://35.238.212.200:8080/getcitieslist',district_payload)
            this.cities = _data.data.city
        },
        changeCity() {
            this.getTowns()
            this.fieldData.town = ''
        },
        async getTowns () {
            let town_payload  = {}
            town_payload.city = this.fieldData.city
            let _data = await Factory.PostService('http://35.238.212.200:8080/gettownslist',town_payload)
            this.towns = _data.data.town
        },
        async getDetails () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getdetails/' + this.fieldData.country + '/' + this.fieldData.state + '/' + this.fieldData.district + '/' + this.fieldData.city + '/' + this.fieldData.town + '/' + this.fieldData.bloodgroup)
            console.log(_data)
            this.rows = _data.data
            this.showTable = true
        }
        
    }
}
</script>

<style>
.el-form-item.label-text {
    margin-bottom: 10px;
}
.table-card {
    width: 70%;
    position: absolute;
    right: 15px;
    top: 100px;
}
.field-card {
    width: 20%;
    position: absolute;
    left: 15px;
    top: 100px;
}
 .label-text .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    font-weight:600;
    color:black;
    line-height: 40px;
    padding: 0 0 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 4px;
  position: relative;
  background-color: black;
  border: none;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 25px;
  width: 100px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  border-radius: 4px;
  height: 3px;
  margin-left: 55px;
}
.button:hover {
  background: #fff;
  color: #000;
}
.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
.button:focus { outline:0; }
.button:focus { outline:0; }
table {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}
table th {
  text-transform: uppercase;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background:rgb(228, 88, 88);
  color: #FFF;
  padding: 8px;
  min-width: 30px;
  font-size: 18px;
  font-weight: 400;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #7D82A8;
  font-size: 14px;
  color:black;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
.contact-donor {
    text-decoration: underline;
    color: mediumblue;
    cursor: pointer;
}
.text-message {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;

}
.message-card {
    width: 50%;
    margin-left: 10px;
}
.sent-donor {
    color: green;
}
.width-style .el-input__inner{
   height: 30px;
}

</style>