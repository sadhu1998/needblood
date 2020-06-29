<template>
<v-app>
    <div>
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
        <link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">    
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div id="app">
  <div class="navbar">
    <div class="colum">
        <div class="logo">
           <img src="../assets/dnm.png" alt="img" id="logo" @click="gotohome"> 
        </div>
        <div class="home" >
          <i class="fa fa-home" @mouseover="changeColorhome" @mouseleave="removeColorhome" v-bind:style=styleColorhome id="home"></i>
          <h4 style="margin-top: 8px; color: black;position:absolute;bottom:0%;right:58%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;"> HOME </h4>
        </div>

      <div class="check">
        <i class="fa fa-question-circle" @mouseover="changeColorcheck" @mouseleave="removeColorcheck" v-bind:style=styleColorcheck id="check"></i>
         <h4 style="margin-top: 8px; color: black;position:absolute;bottom:0%;right:50%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;"> ABOUT </h4>
      </div>

      <div class="coin" >
        <i class="fa fa-thumbs-up" @mouseover="changeColorcoin" @mouseleave="removeColorcoin" v-bind:style=styleColorcoin id="coin"></i>
         <h4 style="margin-top: 8px; color: black;position:absolute;bottom:0%;right:43%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;">HELP </h4>
      </div>
      
      <div class="user" >
        <i class="fa fa-user" style="font-size:36px;color:black" id="user"></i>
        <h4 style="margin-top: 10px; color: black;position:absolute;right:9%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 18px;font-weight: 400;"> {{$store.state.userName}} </h4>
      </div>
      <v-menu offset-y min-width="200px">
      <template v-slot:activator="{ on, attrs }">
         <i class='fa fa-angle-down' style='font-size:30px;color:black' id="dropdowns" v-on="on" v-bind="attrs"></i>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="clickItem(item,index)"
        >
          <v-list-item-title>
          <span :class="item.icon" style="font-size:20px;color:black"></span>    
          {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
  </div>
</div>   
        <el-card shadow="hover" class="field-card">
            <v-form
            ref="signupForm"
          >
            <v-row align="center" style="width:85%;margin-left:20px">
                <v-select
                  v-model="bloodgroup"
                  :items="options"
                  :rules="[v => !!v || 'Bloodgroup is required']"
                  label="Blood Group"
                >
                </v-select>
                <v-select
                v-model="country"
                :items="countries"
                :rules="[v => !!v || 'Country is required']"
                label="Country"
                @change="changeCountry"
              ></v-select>
              <v-select
                v-model="state"
                :items="states"
                :rules="[v => !!v || 'State is required']"
                label="State"
                @change="changeState"
              ></v-select>
               <v-select
                v-model="district"
                :items="districts"
                :rules="[v => !!v || 'District is required']"
                label="District"
                @change="changeDistrict"
              ></v-select>
              <v-select
                v-model="city"
                :items="cities"
                :rules="[v => !!v || 'City is required']"
                label="City"
                @change="changeCity"
              ></v-select>
              <v-select
                v-model="town"
                :rules="[v => !!v || 'Town is required']"
                :items="towns"
                label="Town"
              ></v-select>
            </v-row>
            </v-form>
          <button class="button-search" @click="getDetails">search</button>
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
                <div v-if="optionalFlag"><br></div>
                <button v-if="optionalFlag" class="button-search" style="margin-left:40%" @click="clickSubmit">SUBMIT</button>
                <div v-if="optionalFlag"><br></div>
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
         <v-row justify="center">
  </v-row>
  <v-dialog
        v-model="profileDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar
            flat
            class="headline grey lighten-2"

          >
            <v-toolbar-title style="color: black;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 30px;font-weight: 500;">USER PROFILE</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
                style="color:black"
              >
                Save
              </v-btn>
            </v-toolbar-items>
            <v-btn
              icon
              dark
              @click="profileDialog = false"
              style="color:black"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-btn
              color="primary"
              dark
              class="ma-2"
              @click="dialog2 = !dialog2"
            >
              Open Dialog 2
            </v-btn>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  v-bind="attrs"
                  v-on="on"
                >Tool Tip Activator</v-btn>
              </template>
              Tool Tip
            </v-tooltip>
            <v-list
              three-line
              subheader
            >
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              three-line
              subheader
            >
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </div>
</v-app>
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
            profileDialog : false,
            items: [
                { title: 'Profile',
                  icon: 'fa fa-user'

                },
                { title: 'Settings',
                  icon : 'fa fa-gear'
                },
                { title: 'Contact Us',
                  icon : 'fa fa-address-book'
                },
                { title: 'Logout',
                  icon : 'fa fa-sign-out'
                },

            ],
            styleColorhome : 'font-size:36px;color:black;cursor:pointer',
            styleColorcheck : 'font-size:36px;color:black;cursor:pointer',
            styleColorcoin : 'font-size:36px;color:black;cursor:pointer',
            showHome: false,
            showCheck: false,
            showCoin: false,
            showUser: false,
            effect: 'lni-tada-effect',
            stateDisable : true, 
            districtDisable : true,
            cityDisable : true,
            townDisable : true,
            bloodgroup:'',
            town:'',
            city:'',
            district:'',
            state:'',
            country:'',
            showTable : false,
            optionalFlag : false,
            messageText : '',
            textarea : '',
            visible : false,
            rows: [],
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
        this.$store.state.userName = localStorage.getItem('username')
        
    },
    async mounted () {
    },
    methods : {
        async requestDonor (row,index) {
            this.requestPayload.mailid = row.mailid
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
            }
        },
        clickSubmit () {
          this.optionalFlag = false
          Message.success('We will deliver your message to all the requested contacts!')
        },
        optionalMessage () {
          this.optionalFlag = true
        },
        async getCountries () {

            let _data = await Factory.getService('http://35.238.212.200:8080/getlist/countries')
            this.countries = _data.data.countriesList.country
        },
        async getBloodgroupList () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getlist/bloodgroups')
            this.options = _data.data.bloodGroupsList.blood_group
        },
        changeCountry () {
            this.getStates()
            this.fieldData.state= ''
            this.fieldData.district = ''
            this.fieldData.city = ''
            this.fieldData.town = ''
            this.stateDisable = false
        },
        async getStates () {
        let _data = await Factory.getService('http://35.238.212.200:8080/getlist/states?country=' + this.country)
        this.states = _data.data.statesList.states
        },
        changeState () {
            this.getDistricts()
            this.fieldData.district = ''
            this.fieldData.city = ''
            this.fieldData.town = ''
            this.districtDisable = false
        },
        async getDistricts () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getlist/districts?state=' + this.state)
            this.districts = _data.data.districtsList.districts
        },
        changeDistrict () {
            this.getCities()
            this.fieldData.city = ''
            this.fieldData.town = ''
            this.cityDisable = false
        },
        async getCities () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getlist/cities?district=' + this.district)
            this.cities = _data.data.citiesList.city
        },
        changeCity() {
            this.getTowns()
            this.fieldData.town = ''
            this.townDisable = false
        },
        async getTowns () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getlist/towns?city=' + this.city)
            this.towns = _data.data.townsList.town
        },
        async getDetails () {
            let _data = await Factory.getService('http://35.238.212.200:8080/getdonors/available?' + 'country=' + this.country + '&state=' + this.state + '&district=' + this.district + '&city=' + this.city + '&town=' + this.town + '&bloodgroup=O%2B')
            this.rows = _data.data.donorsList
            this.showTable = true
        },
        changeColorhome () {
            this.styleColorhome = 'font-size:36px;color:blue;cursor:pointer'
        },
        removeColorhome () {
            this.styleColorhome = 'font-size:36px;color:black;cursor:pointer'
        },
        changeColorcheck () {
            this.styleColorcheck = 'font-size:36px;color:blue;cursor:pointer'
        },
        removeColorcheck () {
            this.styleColorcheck = 'font-size:36px;color:black;cursor:pointer'
        },
        changeColorcoin () {
            this.styleColorcoin = 'font-size:36px;color:blue;cursor:pointer'
        },
        removeColorcoin () {
            this.styleColorcoin = 'font-size:36px;color:black;cursor:pointer'
        },
        clickItem (item,index) {
            if (item.title == 'Profile') {
                this.profileDialog = true
            }
        },
        gotohome () {
            this.$router.push('/')
        }
        
    }
}
</script>

<style>
.el-form-item.label-texting {
    margin-bottom: 10px;
}
.table-card {
    width: 70%;
    position: absolute;
    right: 15px;
    top: 15%;
}
.field-card {
    width: 20%;
    position: absolute;
    left: 15px;
    top: 15%;
}
 .label-texting .el-form-item__label {
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
    position: relative;
    top: 10px;
}
.button-search {
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
.button-search:hover {
  background: #fff;
  color: #000;
}
.button-search:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
.button-search:focus { outline:0; }
.button-search:focus { outline:0; }
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
.label-texting .el-form-item__content {
    height: 60px;
}
.navbar{ 
  position: relative;
  z-index:99 !important; 
  width: 100%;
  height: 70px;
  background-color: FFF;
  color: #FFF;  
  border-radius:10px;
  display: flex;
  box-shadow: 0.1px 0.1px 10px 0.1px #092574;
}
#home{
  color: black;
  position:absolute;
  right: 58.3%;
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#check{
  position:absolute;
  right: 50.3%;  
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#coin{
  position:absolute;
  right: 43%;  
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#user{
  position:absolute;
  right: 5%;    
  margin-left: 0;
  margin-top: 5px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#dropdowns{
  position:absolute;
  right: 3%;    
  margin-top: 15px;
  cursor: pointer;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.colum{
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.home{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.logo{
  width: 20%;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
#logo {
 width:10%;
 max-height: 80%;
  position:absolute;
  left:0%;    
  cursor: pointer;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s; 
}
.check{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.coin{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.user{   
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.dropdowns{   
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.clicked{
  width: 100px;
  height: 34px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}
.main-content {
    position: relative;
}



</style>