<template>
      <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
      <div id="tabs" class="container">

    <div class="tabs">
        <a v-on:click="clickSignup" v-bind:class="[ activetab === '1' ? 'active' : '' ]">Sign Up</a>
        <a v-on:click="clickSignin" v-bind:class="[ activetab === '2' ? 'active' : '' ]">Sign In</a>
    </div>

    <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
            <el-form :model="signupForm" :rules="ruleValidate" ref="signupForm">
              <el-form-item label="Full Name" prop="username" class="label-text">
                <el-input v-model="signupForm.username" placeholder="Name Surname" size="medium"></el-input>
              </el-form-item>
              <el-form-item label="Email ID" prop="mailid" class="label-text">
                <el-input v-model="signupForm.mailid" type="email" @input="changeMailid" placeholder="email@example.com" size="medium"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password" class="label-text">
                <el-input v-model="signupForm.password" :type="inputType" placeholder="Enter password" size="medium">
                  <i
                 slot="suffix"
                 @click="navigatePassword"
                 v-if="inputType == 'password'"
                 class="el-icon-view"
                 style="cursor:pointer"
                 aria-hidden="true"
                 ></i>
                 <i
                 slot="suffix"
                 @click="navigatePassword"
                 v-if="inputType == 'text'"
                 class="el-icon-view"
                 style="cursor:pointer"
                 aria-hidden="true"
                 ></i>
                </el-input>
              </el-form-item>
              <el-form-item label="Mobile Number" prop="phonenumber" class="label-text">
                <el-input v-model="signupForm.phonenumber" type="number" placeholder="+91 XXXXXXXXXX" size="medium"></el-input>
              </el-form-item>
              <br>
              <el-form-item label="Blood Group:" prop="bloodgroup" class="label-text">
                <el-select v-model="signupForm.bloodgroup" placeholder="Your blood group is" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Country" prop="country" class="label-text">
                <el-select v-model="signupForm.country" filterable @change="changeCountry" placeholder="Select Country" style="width:100%">
                  <el-option
                    v-for="item in countries"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="State" prop="state" class="label-text">
                <el-select v-model="signupForm.state" filterable @change="changeState" placeholder="Select State" style="width:100%">
                  <el-option
                    v-for="item in states"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="District" prop="district" class="label-text">
                <el-select v-model="signupForm.district" filterable @change="changeDistrict" placeholder="Select district" style="width:100%">
                  <el-option
                    v-for="item in districts"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="City" prop="city" class="label-text">
                <el-select v-model="signupForm.city" filterable @change="changeCity" placeholder="Select City" style="width:100%">
                  <el-option
                    v-for="item in cities"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Town" prop="town" class="label-text">
                <el-select v-model="signupForm.town" filterable placeholder="Select Town" style="width:100%">
                  <el-option
                    v-for="item in towns"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Pincode" prop="pincode" class="label-text">
                <el-input v-model="signupForm.pincode" placeholder="Enter Pincode" size="medium"></el-input>
              </el-form-item>
              <el-form-item label="Receive notifications through:" class="label-text">
                <br>
                <el-checkbox v-model="mail_notification" @change="changemail"><span style="color:black;font-size: 15px;">Email</span></el-checkbox><br>
                <el-checkbox v-model="sms_notification" @change="changesms"><span style="color:black;font-size: 15px;">SMS</span></el-checkbox>
              </el-form-item>

            </el-form>
            <button class="button" @click="sendOtp">Verify</button>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
            <div class="warning-password" v-if="signinWarning">
              <el-row>
                <el-col :span="5">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <i class="material-icons" style="font-size:50px;color:red;margin-top:12px;margin-left:17px">error_outline</i>
                </el-col> 
                <el-col :span="18">
                    <p class="warning-message">There was a problem.</p>
                    <span class="display-message">{{display_message}}!</span>
                </el-col>   
              </el-row>
            </div>
            <div v-if="signinWarning"><br><br></div>
          <el-form :model="signinForm" :rules="signinValidate" ref="signinForm">
            <el-form-item label="Email ID" prop="email" class="label-text">
              <el-input v-model="signinForm.email" placeholder="email@example.com" size="medium"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password" class="label-text">
                <el-input v-model="signinForm.password" :type="inputTypes" placeholder="Enter password" size="medium">
                  <i
                 slot="suffix"
                 @click="navigatePasswords"
                 v-if="inputTypes == 'password'"
                 class="el-icon-view"
                 style="cursor:pointer"
                 aria-hidden="true"
                 ></i>
                 <i
                 slot="suffix"
                 @click="navigatePasswords"
                 v-if="inputTypes == 'text'"
                 class="el-icon-view"
                 style="cursor:pointer"
                 aria-hidden="true"
                 ></i>
                </el-input>
              </el-form-item>
          </el-form>
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
  <el-dialog
    :visible.sync="centerDialogVisible"
    @close="closeDialog"
    width="40%"
    class="dialog">
    <div class="span-box">
    <div v-if="handleChange">  
      <span class="msg-dialog">Enter the 6 digit OTP that is sent on your Email Id!</span><br><br>
    <div style="margin-left:30px">
    <v-otp-input
      inputClasses="otp-input"
      :numInputs="6"
       separator="-"
      :shouldAutoFocus="true"
      @on-complete="handleOnComplete"
      @on-change="handleOnChange"
    />
  </div>
    </div>
    <div class="checkmark" v-if="!handleChange"></div><br><br>
    <span v-if="!handleChange" style="color:#78b13f;margin-left:15%;font-size:16px;font-weight:bold">Your Email has been successfully verified!</span>
    </div><br><br>
    <button class="button" style="float:right" @click="addUser">submit</button>
    <span slot="footer" class="dialog-footer">
    </span>
  </el-dialog>
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
import OtpInput from "@bachdgvn/vue-otp-input";
Vue.component("v-otp-input", OtpInput)
export default {
  data () {
    return {
     signinWarning :false,   
     display_message : '',
     options : '',
     handleChange : true,
     inputType : 'password',
     inputTypes : 'password',
     emailValidation : '',
     input: '',
     activetab: '1',
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
     signinForm : {
       email : '',
       password : ''
     },
        countries : '',
        states : '',
        districts : '',
        cities : '',
        towns : '',
        centerDialogVisible: false,  
        ruleValidate :{
          username : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          mailid : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          password : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          phonenumber : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          bloodgroup : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          country : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          state : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          district : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          city : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          town : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          pincode : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
        },
        signinValidate : {
          email : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ],
          password : [
            { required: true, message: 'This field is required', trigger: 'change' }
          ]
        }
        
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
      let _data = await Factory.getService('http://35.238.212.200:8080/getbloodgroupslist')
      this.options = _data.data.blood_group
    },
    async addUser () {
      let _data = await Factory.PostService('http://35.238.212.200:8080/addUser',this.signupForm)
        if (_data.data.error) {
          Message.error(_data.data.error)
          return false
        }
        this.activetab = '2'
        this.clearForm()
        this.centerDialogVisible = false
    },
    async handleOnComplete (value) {
      var validate_email_payload = {}
      validate_email_payload.otp = value
      validate_email_payload.mailid = this.signupForm.mailid
      let _response = await Factory.PostService('http://35.238.212.200:8080/validateotp',validate_email_payload)
      if (_response.data.error) {
         Message.error(_response.data.error)
         return false
      }
      this.handleChange = false
    },
    handleOnChange (value) {
      console.log('poiu')

    },
    navigatePassword () {
    if (this.inputType === 'password') {
      this.inputType = 'text'
    }
    else {
      this.inputType = 'password'
    }
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
      this.$refs.signupForm.validate(async valid => {
        if (valid) {
        let otp_payload = {}
        otp_payload.mailid = this.signupForm.mailid
        const _response = await Factory.PostService('http://35.238.212.200:8080/sendotp',otp_payload)
        if (_response.data.error) {
              Message.error(_response.data.error)
              return false
            }
        this.centerDialogVisible = true
        }
      })
    }, 
    gotoPage () {
      this.$refs.signinForm.validate(async valid => {
        if (valid) {
          var authenticate_payload = {}
          authenticate_payload.mailid = this.signinForm.email
          authenticate_payload.password = this.signinForm.password

          var _data = await Factory.PostService('http://35.238.212.200:8080/authenticate',authenticate_payload)
          if (_data.data.error) {
              this.display_message = _data.data.error
              this.signinWarning = true
              return false
          }
          if (_data.data.status) {
            this.$store.state.userData = _data.data
            console.log(this.$store.state.userData)
            this.clearSigninForm()  
            this.$router.push('/infopage')
          }
        }
      })  

    },
    changesms () {
     this.signupForm.sms_notification = this.sms_notification
    },
    changemail () {
      this.signupForm.mail_notification = this.mail_notification
    },
    async getCountries () {

      let _data = await Factory.getService('http://35.238.212.200:8080/getcountrieslist')
      this.countries = _data.data.country
    },
    changeCountry () {
      this.getStates()
      this.signupForm.state= ''
      this.signupForm.district = ''
      this.signupForm.city = ''
      this.signupForm.town = ''
    },
    async getStates () {
      let country_payload  = {}
      country_payload.country = this.signupForm.country
      let _data = await Factory.PostService('http://35.238.212.200:8080/getstateslist',country_payload)
      this.states = _data.data.states
    },

    changeState () {
      this.getDistricts()
      this.signupForm.district = ''
      this.signupForm.city = ''
      this.signupForm.town = ''
    },
    async getDistricts () {
      let state_payload  = {}
      state_payload.state = this.signupForm.state
      let _data = await Factory.PostService('http://35.238.212.200:8080/getdistrictslist',state_payload)
      this.districts = _data.data.districts
    },
    changeDistrict () {
      this.getCities()
      this.signupForm.city = ''
      this.signupForm.town = ''
    },
    async getCities () {
      let district_payload  = {}
      district_payload.district = this.signupForm.district
      let _data = await Factory.PostService('http://35.238.212.200:8080/getcitieslist',district_payload)
      this.cities = _data.data.city
    },
    changeCity() {
      this.getTowns()
      this.signupForm.town = ''
    },
    async getTowns () {
      let town_payload  = {}
      town_payload.city = this.signupForm.city
      let _data = await Factory.PostService('http://35.238.212.200:8080/gettownslist',town_payload)
      this.towns = _data.data.town
    },
    clearSigninForm () {
      this.signinForm.email = ''
      this.signinForm.password = ''
      this.signinWarning = false
    },
    clearForm () {
      this.$refs.signupForm.resetFields()  
      this.signupForm.username = ''
      this.signupForm.mailid = ''
      this.signupForm.password = ''
      this.signupForm.phonenumber = ''
      this.signupForm.bloodgroup= ''
      this.signupForm.country = ''
      this.signupForm.state = ''
      this.signupForm.district = ''
      this.signupForm.city = ''
      this.signupForm.town = ''
      this.signupForm.pincode = ''
      this.mail_notification = false
      this.sms_notification = false
      this.handleChange = true
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
  margin-left: 125px;
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
  position: absolute;
  top:8%;
  right:5%;
  left:60%;
  max-width: 620px; 
  min-width: 420px;
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
  width: 375px;
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
    margin-top: 8px;
}
.display-message {
    font-size: 16px;
    color: black;
    font-weight: 700;
    margin-left:20px;
    
}
</style>
