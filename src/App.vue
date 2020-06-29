<template>
<v-app>
<div> 
<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
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
           <img src="./assets/dnm.png" alt="img" id="logo" @click="gotohome"> 
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
          @click="clickItem(index)"
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
</div>     -->
<div class="main-content">
<router-view></router-view>
</div>
</div>
</v-app>    
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
<script>
export default {
    data () {
        return {
            // items: [
            //     { title: 'Profile',
            //       icon: 'fa fa-user'

            //     },
            //     { title: 'Settings',
            //       icon : 'fa fa-gear'
            //     },
            //     { title: 'Contact Us',
            //       icon : 'fa fa-address-book'
            //     },
            //     { title: 'Logout',
            //       icon : 'fa fa-sign-out'
            //     },

            // ],
            // styleColorhome : 'font-size:36px;color:black;cursor:pointer',
            // styleColorcheck : 'font-size:36px;color:black;cursor:pointer',
            // styleColorcoin : 'font-size:36px;color:black;cursor:pointer',
            // showHome: false,
            // showCheck: false,
            // showCoin: false,
            // showUser: false,
            // effect: 'lni-tada-effect'
        }
    },
    methods : {
        // changeColorhome () {
        //     this.styleColorhome = 'font-size:36px;color:blue;cursor:pointer'
        // },
        // removeColorhome () {
        //     this.styleColorhome = 'font-size:36px;color:black;cursor:pointer'
        // },
        // changeColorcheck () {
        //     this.styleColorcheck = 'font-size:36px;color:blue;cursor:pointer'
        // },
        // removeColorcheck () {
        //     this.styleColorcheck = 'font-size:36px;color:black;cursor:pointer'
        // },
        // changeColorcoin () {
        //     this.styleColorcoin = 'font-size:36px;color:blue;cursor:pointer'
        // },
        // removeColorcoin () {
        //     this.styleColorcoin = 'font-size:36px;color:black;cursor:pointer'
        // },
        // clickItem (index) {
        //     console.log('qwe')
        // },
        // gotohome () {
        //     this.$router.push('/')
        // }
        
    }
  
}
</script>

<style>
/* .navbar{ 
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
} */

</style>

