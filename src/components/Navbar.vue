<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <div class="navbar">
    <h3>
      IB PREPS
    </h3>

    <button id="need-help-btn">Need help?</button>
    <button id="interested-btn">I'm interested!</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar {
  position: fixed;
  background: linear-gradient(140deg, #02385C, #2170A6);
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
}


h3 {
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: white;
  margin: auto;
  line-height: 100%;
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
  height: calc(100% - 10px);

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
  height: calc(100% - 10px);
  /* margin: auto 25px; */
  display: inline-block;
}


</style>
