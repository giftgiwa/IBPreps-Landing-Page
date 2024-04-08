<script setup>
import '../assets/main.css'
import $ from 'jquery'
import IB_Preps from '../assets/videos/IB_Preps.mp4'

$(document).ready(function() {

    $("#email-address-1").keypress(function(event) {
        if (event.which === 13) {
            $("#submit-button-1").click()
        }
    })

    $('#submit-button-1').click(function() {

        let emailAddress  = document.getElementById("email-address-1").value

        // const validateEmail = (email) => {
        //     return String(email)
        //         .toLowerCase()
        //         .match(
        //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //         );
        // };

        // POST request
        $.ajax({
            type: "POST",
            url: "https://ib-prep-project.vercel.app/api/whitelist",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify({
                email: emailAddress,
            }),
            success: function(result){
                // clear input field on submit
                document.getElementById("email-address-1").value = ""
                
                document.getElementById("submit-button-1").textContent = "Submitted!"
                document.getElementById("email-address-1").style.borderColor = "#cfffd1"

            },
            error: function(request, status, error){
                console.log("Error")
                
                document.getElementById("email-address-1").style.borderColor = "#ffd2cf"

                console.log(status)
                console.log(error)
            }
        });
    })
})
</script>

<template>
    <div class="container poppins" id="what-is-ib">
        <div class="row">
            <div class="col-md-7 poppins" id="left-column">
                <h2>What is IB Preps?</h2>
                <p>
                    <b>IB Preps</b> is the all-in-one platform that empowers IB students with access to study materials and qualified support resources to successfully navigate the IB certification and achieve a high score.
                </p>
                <p>
                    Concretely, IB Preps features course content and mock-exams, guidance for essays, group and individual live classes with certified IB teachers, and psychological and vocational support.
                </p>

                <div id="interest-form">
                    <p class="center">Be the first to try IB Preps!</p>
                    <div class="row">
                        <div class="col-md-7" id="sub-container">
                            <input id="email-address-1" class="col-md-7" placeholder="Email adress">
                        </div>
                        <div class="col-md-5" id="sub-container">
                            <button id="submit-button-1">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5 poppins" id="right-column">
                <video controls>
                    <source id="video" :src="IB_Preps" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>   
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#what-is-ib {
    display: block;
    margin-top: 100px;
    padding-top: 20px;
    padding-bottom: 0px;
    margin-bottom: 30px;
}

h2 {
    font-weight: 600;
    color: #02385C;
    font-size: 36px;
}

p {
    font-size: 16px;
    text-align: left;
    font-weight: 400;
}

#left-column {
    padding: 30px;
    box-sizing: border-box;
}

#right-column {
    padding: 10px;
    box-sizing: border-box;
}

#video-placeholder {
    height: 200px;
    background-color: black;
    margin-left: 10px;
    margin-right: 10px;
}

.center {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}

input {
    width: 100%;
    height: 50px;
    border-width: 5px;
    border: 2px solid var(--outline-primary, #D1E9FF);
    border-radius: 10px;
    padding: 10px;
    transition: 0.25s;
    font-size: 12px;
    outline: none;
}

input:hover {
    background-color: rgba(225, 225, 225, 0.5);
}

button {
    width: 100%;
    height: 50px;
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
}

#sub-container {
    margin-bottom: 10px;
}

video {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 100%;
    height: auto;
}

@media screen and (max-width: 600px) {
    #what-is-ib {
        margin-top: 50px;
    }
}
</style>
