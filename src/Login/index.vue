<template>
<v-app>
      <div id="app">
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
        <h4 style="margin-top: 10px; color: black;position:absolute;right:9%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 18px;font-weight: 400;">LOGIN/SIGNUP </h4>
      </div>
    </div>
  </div>
</div>  
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <div id="tabs" class="container">

    <div class="tabs">
        <a v-on:click="clickSignup" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Sign Up</a>
        <a v-on:click="clickSignin" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Sign In</a>
    </div>

    <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
            <v-form
            ref="signupForm"
          >
            <v-row align="center">
            <v-text-field
              v-model="username"
              :counter="15"
              :rules="nameRules"
              label="Full Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="mailid"
              :rules="emailRules"
              label="Email ID"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :passwordRules="[passwordRules.required, passwordRules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field
              v-model="phonenumber"
              :rules="mobileRules"
              label="Mobile Number"
              type="number"
              required
            ></v-text-field>
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
                :disabled="stateDisable"
                :rules="[v => !!v || 'State is required']"
                label="State"
                @change="changeState"
              ></v-select>
               <v-select
                v-model="district"
                :items="districts"
                :disabled="districtDisable"
                :rules="[v => !!v || 'District is required']"
                label="District"
                @change="changeDistrict"
              ></v-select>
              <v-select
                v-model="city"
                :items="cities"
                :disabled="cityDisable"
                :rules="[v => !!v || 'City is required']"
                label="City"
                @change="changeCity"
              ></v-select>
              <v-select
                v-model="town"
                :rules="[v => !!v || 'Town is required']"
                :items="towns"
                :disabled="townDisable"
                label="Town"
              ></v-select>
              <v-switch v-model="mail_notification" @change="changemail" class="ma-2" label="Email Alerts" ></v-switch>
              <v-switch v-model="sms_notification" @change="changesms" class="ma-2" label="SMS Alerts" ></v-switch>
            </v-row>
            </v-form>
            <button class="button" @click="sendOtp">Verify</button>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
            <div class="warning-password" v-if="signinWarning">
              <el-row>
                <el-col :span="5">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <i class="material-icons" style="font-size:50px;color:red;margin-top:12px;margin-left:5px">error_outline</i>
                </el-col> 
                <el-col :span="18">
                    <p class="warning-message">There was a problem.</p>
                    <span class="display-message">{{display_message}}!</span>
                </el-col>   
              </el-row>
            </div>
            <div v-if="signinWarning"><br><br></div>
            <v-form
            ref="signinForm"
          >
            <v-row align="center">
              <v-text-field
              v-model="signinmailid"
              :rules="emailRules"
              label="Email ID"
              required
            ></v-text-field>
            <v-text-field
              v-model="signpassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :passwordRules="[passwordRules.required, passwordRules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            
            </v-row>
            </v-form>
          <button class="button" @click="gotoPage">login</button><br><br><br>
          <span slot="prefix" style="color:black;font-size:16px;font-weight:600;cursor:pointer"><u>Forgot Password?</u></span>
          <span slot="suffix" style="float:right">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <i class="fa fa-question-circle" style="font-size:30px;color:black;margin-bottom:5px;cursor:pointer"></i>
          </span>
        </div>
    </div>
  
</div>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="44%"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          style="font-size:12px"
        >
         Enter the 6 digit OTP that is sent on your Email ID!
        </v-card-title>

        <v-card-text>
        <div style="margin-left:80px;margin-top:30px" v-if="handleChange">
          <v-otp-input
            inputClasses="otp-input"
            :numInputs="6"
            separator="-"
            :shouldAutoFocus="true"
            @on-complete="handleOnComplete"
            @on-change="handleOnChange"
          />
        </div>
        <div class="checkmark" v-if="!handleChange"></div><br><br>
        <span v-if="!handleChange" style="color:#78b13f;margin-left:15%;font-size:16px;font-weight:bold">Your Email has been successfully verified!</span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="addUser"
          >
            submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
import OtpInput from "@bachdgvn/vue-otp-input";
Vue.component("v-otp-input", OtpInput)
export default {
  data () {
    return {
            styleColorhome : 'font-size:36px;color:black;cursor:pointer',
            styleColorcheck : 'font-size:36px;color:black;cursor:pointer',
            styleColorcoin : 'font-size:36px;color:black;cursor:pointer',
            showHome: false,
            showCheck: false,
            showCoin: false,
            showUser: false,
            effect: 'lni-tada-effect', 
     signinmailid : '',
     signpassword : '', 
     dialog:false, 
     stateDisable : true, 
     districtDisable : true,
     cityDisable : true,
     townDisable : true,
     show1: false,
     password : 'Password', 
     signinWarning :false,   
     display_message : '',
     options : '',
     handleChange : true,
     inputTypes : 'password',
     emailValidation : '',
     input: '',
     activetab: '1',
      mailid : '',
      username:'',
      phonenumber:'',
      bloodgroup:'',
      town:'',
      city:'',
      district:'',
      state:'',
      country:'',
      password:'',
      pincode: '',
     signupForm : {
       mailid : '',
       username:'',
       phonenumber:'',
       bloodgroup:'',
       town:'',
       city:'',
       district:'',
       state:'',
       country:'',
       password:'',
       pincode: '',
       mail_notification : false,
       sms_notification : false
     },
     mail_notification : false,
     sms_notification : false,
        countries : '',
        states : '',
        districts : '',
        cities : '',
        towns : '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 15) || 'Name must be less than 15 characters',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
       passwordRules: {
          required: value => !!value || 'Password is required',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        mobileRules : [
           v => !!v || 'Mobile number is required',
        ],     
    }
  },
  async created () {
  this.getCountries()
  this.getBloodgroupList()
  },
  methods : {
    clickSignin () {
      this.activetab = '2'
      this.clearForm()
    },  
    clickSignup () {
      this.activetab = '1'
      this.clearSigninForm()
    },
    changeMailid () {
      this.handleChange = true
    },
    closeDialog () {
    },
    async getBloodgroupList () {
      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/bloodgroups')
      this.options = _data.data.bloodGroupsList.blood_group
    },
    async addUser () {
       this.signupForm.mailid = this.mailid
       this.signupForm.username = this.username
       this.signupForm.phonenumber = this.phonenumber
       this.signupForm.bloodgroup = this.bloodgroup
       this.signupForm.town = this.town
       this.signupForm.city = this.city
       this.signupForm.district = this.district
       this.signupForm.state = this.state
       this.signupForm.country = this.country
       this.signupForm.password = this.password
       this.signupForm.pincode = this.pincode
       this.signupForm.mail_notification = this.mail_notification
       this.signupForm.sms_notification = this.sms_notification
      let _data = await Factory.PostService('http://35.238.212.200:8080/addUser',this.signupForm)
        if (_data.data.error) {
          Message.error(_data.data.error)
          return false
        }
        this.activetab = '2'
        this.clearForm()
        this.dialog = false
    },
    async handleOnComplete (value) {
      var validate_email_payload = {}
      validate_email_payload.otp = value
      validate_email_payload.mailid = this.mailid
      let _response = await Factory.PostService('http://35.238.212.200:8080/validateotp',validate_email_payload)
      if (_response.data.error) {
         Message.error(_response.data.error)
         return false
      }
      this.handleChange = false
    },
    handleOnChange (value) {
    },
    navigatePasswords () {
    if (this.inputTypes === 'password') {
      this.inputTypes = 'text'
    }
    else {
      this.inputTypes = 'password'
    }
    },
    async sendOtp () {
      this.$refs.signupForm.validate()

      if (this.$refs.signupForm.validate()) {
        let otp_payload = {}
        otp_payload.mailid = this.mailid
        const _response = await Factory.PostService('http://35.238.212.200:8080/sendotp',otp_payload)
        if (_response.data.error) {
              Message.error(_response.data.error)
              return false
            }
        this.dialog = true
      } 
    }, 
    async gotoPage () {
      this.$refs.signinForm.validate()
      if (this.$refs.signinForm.validate()) {
         debugger
         var authenticate_payload = {}
          authenticate_payload.mailid = this.signinmailid
          authenticate_payload.password = this.signpassword
          var _data = await Factory.PostService('http://35.238.212.200:8080/authenticate',authenticate_payload)
          if (_data.data.error) {
              this.display_message = _data.data.error
              this.signinWarning = true
              return false
          }
          if (_data.data.status) {
            localStorage.setItem('email_id',_data.data.mailid)
            localStorage.setItem('username',_data.data.username)
            this.$store.state.dropdownFlag = true
            localStorage.setItem('dropdownflag',this.$store.state.dropdownFlag)
          }
          this.clearSigninForm()  
          this.$router.push('/infopage')
      }

    },
    changesms () {
     this.signupForm.sms_notification = this.sms_notification
    },
    changemail () {
      this.signupForm.mail_notification = this.mail_notification
    },
    async getCountries () {

      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/countries')
      this.countries = _data.data.countriesList.country
    },
    changeCountry () {
      this.getStates()
      this.state= ''
      this.district = ''
      this.city = ''
      this.town = ''
      this.stateDisable = false
    },
    async getStates () {
      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/states?country=' + this.country)
      this.states = _data.data.statesList.states
    },

    changeState () {
      this.getDistricts()
      this.district = ''
      this.city = ''
      this.town = ''
      this.districtDisable = false
    },
    async getDistricts () {
      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/districts?state=' + this.state)
      this.districts = _data.data.districtsList.districts
    },
    changeDistrict () {
      this.getCities()
      this.city = ''
      this.town = ''
      this.cityDisable = false
    },
    async getCities () {
      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/cities?district=' + this.district)
      this.cities = _data.data.citiesList.city
    },
    changeCity() {
      this.getTowns()
      this.town = ''
      this.townDisable = false
    },
    async getTowns () {
      let _data = await Factory.getService('http://35.238.212.200:8080/getlist/towns?city=' + this.city)
      this.towns = _data.data.townsList.town
    },
    clearSigninForm () {
      this.signinmailid = ''
      this.signpassword = ''
      this.signinWarning = false
    },
    clearForm () {
      this.username = ''
      this.mailid = ''
      this.password = ''
      this.phonenumber = ''
      this.bloodgroup= ''
      this.country = ''
      this.state = ''
      this.district = ''
      this.city = ''
      this.town = ''
      this.pincode = ''
      this.mail_notification = false
      this.sms_notification = false
      this.handleChange = true
      this.stateDisable = true
      this.districtDisable = true
      this.cityDisable = true
      this.townDisable = true
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
        clickItem (index) {
            console.log('qwe')
        },
        gotohome () {
            this.$router.push('/')
        }
  },
  name: 'App'
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.checkmark {
  display: inline-block;
  transform: rotate(45deg);
  height: 50px;
  width: 20px;
  margin-left: 47%; 
  border-bottom: 7px solid #78b13f;
  border-right: 7px solid #78b13f;
}
#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 315px;
  min-width: 315px;
}
.span-box {
  width: 100%;
  height: 100%;
  padding:15px;
  border: 2px solid;
  -moz-box-shadow:    inset 0 0 2px #000000;
   -webkit-box-shadow: inset 0 0 2px #000000;
   box-shadow:         inset 0 0 2px #000000;

}
.msg-dialog {
   font-size: 18px;
   color: black;
   font-weight:bold;
   text-align: center;
   margin-left:20px
}
.msg-dialog1 {
   font-size: 16px;
   font-weight:200;
   text-align: center;
   margin-left:20px;
   color: black;

}
 .label-text .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 20px;
    font-weight:900;
    color:black;
    line-height: 40px;
    padding: 0 6px 0 0;
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
  left: 25%;
  background-color: black;
  border: none;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 25px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  border-radius: 4px;
  height: 3px;
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
.button1 {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 4px;
  position: relative;
  background-color:#484848;
  border: none;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 25px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  border-radius: 4px;
  height: 3px;
  margin-left: 152px;
}
.button1:hover {
  background: #fff;
  color: #000;
}
.button:focus { outline:0; }
.container { 
  overflow: hidden;
  position: absolute;
  top:8%;
  left:67%;
  width:30%;
  margin: 40px auto;
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
  backdrop-filter: blur(15px);

}
.tabs {
    overflow: hidden;
    margin-bottom: -2px; /* hide bottom border */
    margin-left: 24px;
    font-size: 20px;
}
.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}
.tabcontent {
    padding: 30px 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #e1e1e1;
}
.tabcontent td {
  padding: 0.3em 0.4em;
  color: #484848;
}
.tabcontent td.legend { 
  color: #888; 
  font-weight: bold;
  text-align: right;
}
.tabcontent .map {
  height: 173px;
  width: 220px;
  background: #D3EAFB;
  margin-left: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.data { width: 120px; }
/* #app,html {
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 100%;
  height: 1470px;
  position:absolute;
  left: 0%;
  top: 1%;
  background-image: url("../assets/bg_image2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.error {
  border: 1px solid red !important;
}
.warning-password {
  width: 100%;
  height: 75px;
  border: 2px solid;
  -moz-box-shadow:    inset 0 0 2px #000000;
   -webkit-box-shadow: inset 0 0 2px #000000;
   box-shadow:         inset 0 0 2px #000000;
}
.warning-message {
    color: red;
    font-weight: 500;
    font-size: 20px;
    margin-top: 2px;
}
.display-message {
    font-size: 16px;
    color: black;
    font-weight: 700;
    margin-left:20px;
    position: relative;
    top: -5%;
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
