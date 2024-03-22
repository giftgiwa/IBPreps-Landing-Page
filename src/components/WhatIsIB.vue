<script setup>
import '../assets/main.css'

let emails = ""
</script>

<template>
    <div class="container poppins" id="what-is-ib">
        <div class="row">
            <div class="col-md-7 poppins" id="left-column">
                <h2>What is IB Preps?</h2>
                <p>
                    <b>IB Preps</b> is the all-in-one platform that empowers IB students with access to study materials and qualified support resources to achieve a high score in the IB Diploma.
                </p>

                <div id="interest-form">
                    <p class="center">Be the first to try IB Preps!</p>
                    <div class="row">
                        <div class="col-md-7" id="sub-container">
                            <input class="col-md-7" placeholder="Email adress">
                        </div>
                        <div class="col-md-5" id="sub-container">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5 poppins" id="right-column">
                <div id="video-placeholder"></div>
            </div>
        </div>   
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#what-is-ib {
    display: block;
    margin-top: 70px;
    /* position: relative;
    top:70px; */
}

h2 {
    font-weight: 600;
    color: #02385C;
}

p {
    font-size: 14px;
}

/* .poppins {
    font-family: "Poppins", sans-serif;
} */

#left-column {
    padding: 10px;
    box-sizing: border-box;
}

#right-column {
    padding: 10px;
    box-sizing: border-box;
}

#video-placeholder {
    height: 200px;
    /* width: 400px; */
    background-color: black;
}

.center {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}
input {
    width: 100%;
    height: 100%;
    border-width: 5px;
    border: 2px solid var(--outline-primary, #D1E9FF);
    border-radius: 10px;
    padding: 10px;
    transition: 0.25s;
    font-size: 12px;
}

input:hover {
    background-color: rgba(225, 225, 225, 0.5);
}

button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-width: 0;
    background: #1DCBF2;
    box-shadow: 0px 0px 12.6px 0px rgba(0, 0, 0, 0.25);
    transition: 0.25s;
    font-weight: 600;
    color: #02385C;
    margin-bottom: 20px;
}

button:hover {
    background-color: #67e3ff;
}

#interest-form {
    margin-bottom: 20px;
    /* margin-left: 20px;
    margin-right: 20px; */
}

#sub-container {
    margin-bottom: 10px;
}
</style>
