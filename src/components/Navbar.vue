<template>
  <div id="navbar">
    <div id="logo-container">
      <img id="logo" src="../assets/images/ib-preps-logo.svg">
    </div>

    <h3>IB PREPS</h3>

    <div class="options">
      <button @click="showInnerComponent" id="need-help-btn">
        Need help?
      </button>

      <button id="interested-btn">I'm interested!</button>
    </div>
  </div>

  <NeedHelp v-if="innerComponentVisible" @hide="hideInnerComponent"></NeedHelp>
</template>

<script>
import NeedHelp from './NeedHelp.vue'
import $ from 'jquery'

$(document).ready(function() {
  $("#interested-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#be-the-first").offset().top},
        'slow');

    $("#email-address-2").focus()
  });

})


export default {
  components: {
    NeedHelp
  },
  data() {
    return {
      innerComponentVisible: false
    };
  },
  methods: {
    showInnerComponent() {
      // console.log("click")
      this.innerComponentVisible = true;
    },
    hideInnerComponent() {
      this.innerComponentVisible = false;
      // console.log("click")
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#navbar {
  position: fixed;
  background: linear-gradient(140deg, #02385C, #2170A6);
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));
  z-index: 99;
  display: block;
  padding: 0;
}

h3 {
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: white;
  line-height: 50px;
  margin: 0 15px;
  margin-left: 65px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
  letter-spacing: 3px;
}

#need-help-btn {
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 15px;
  transition: 0.25s;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 7.5px 20px;
  cursor: pointer;
  position: relative;
  top: 5px;
}

#need-help-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

#interested-btn {
  background-color: #1DCBF2;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  border: 0;
  border-radius: 15px;
  height: 40px;
  transition: 0.25s;
  padding: 7.5px 20px;
  align-items:center;
  box-shadow: 5px rgba(0, 0, 0, 0.5);
  color: #02385C;
  margin-left: 10px;
  margin-right: 30px;
  cursor: pointer;
  position: relative;
  right: 0px;
  top: 5px;
}

#interested-btn:hover {
  background-color: #67e3ff;
}

.options {
  display: inline-block;
  height: auto;
  position: absolute;
  right: 0;
}

#logo-container {
  display: inline-block;
  position: absolute;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#logo {
  width: 40px;
  height: 40px;
  margin: 5px;
  margin-left: 15px;
}

@media screen and (max-width: 600px) {
  #need-help-btn {
    display: none;
  }

  #interested-btn {
    margin-right: 15px;
  }
}
</style>
