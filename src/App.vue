<template>
<div>
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">    
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css">
<div id="app">
  <div class="navbar">
    <div class="colum">
        <div class="home" >
          <i class="lni-home size-md " id="home"></i>
          <h4 style="margin-top: 8px; color: #ffff;position:absolute;bottom:0%;right:58%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;"> HOME </h4>
        </div>

      <div class="check">
        <i class="lni lni-information size-md" id="check"></i>
         <h4 style="margin-top: 8px; color: #ffff;position:absolute;bottom:0%;right:50%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;"> ABOUT </h4>
      </div>

      <div class="coin" >
        <i class="lni lni-help size-md" id="coin"></i>
         <h4 style="margin-top: 8px; color: #ffff;position:absolute;bottom:0%;right:43%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 15px;font-weight: 400;">HELP </h4>
      </div>
      
      <div class="user" >
        <i class="lni-user size-md"  id="user"></i><br>
        <h4 style="margin-top: 10px; color: #ffff;position:absolute;right:9%;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 18px;font-weight: 400;"> {{$store.state.userName}} </h4>
      </div>
    </div>
  </div>
</div>    
<router-view></router-view>
</div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
<script>
export default {
    data () {
        return {
            showHome: false,
            showCheck: false,
            showCoin: false,
            showUser: false,
            effect: 'lni-tada-effect'
        }
    }
  
}
</script>

<style>
.navbar{
  width: 100%;
  height: 70px;
  background-color: #888;
  color: #FFF;
  position: absolute;
  top: 0%;
  border-radius:10px;
  display: flex;
  box-shadow: 0.1px 0.1px 15px 0.1px #092574;
}
#home{
  position:absolute;
  right: 58%;
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
.clicked{
  width: 100px;
  height: 34px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}

</style>

