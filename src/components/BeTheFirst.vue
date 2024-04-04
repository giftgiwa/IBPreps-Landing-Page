<script setup>
import '../assets/main.css'
import $ from 'jquery'

$(document).ready(function() {

    $("#email-address-2").keypress(function(event) {
        if (event.which === 13) {
            $("#submit-button-2").click()
        }
    })

    $("#submit-button-2").click(function() {
        // console.log(document.getElementById("submit-button-2").textContent)

        let emailAddress  = document.getElementById("email-address-2").value

        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };

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
                document.getElementById("email-address-2").value = ""
                
                document.getElementById("submit-button-2").textContent = "Submitted!"
                document.getElementById("email-address-2").style.borderColor = "#cfffd1"

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
    <div id="be-the-first">
        <p id="header-form-text">Be the first to try IB Preps!</p>

        <div class="container" id="interest-form">
            <div class="row">
                <div class="col-md-7" id="sub-container">
                    <input class="col-md-7 poppins" id="email-address-2" placeholder="Email adress">
                </div>
                <div class="col-md-5" id="sub-container">
                    <button id="submit-button-2">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#be-the-first {
    width: 100vw;
    background-color: #E8F7FF;
    display: block;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
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
    /* margin-bottom: 20px; */
    /* margin-left: 20px;
    margin-right: 20px; */
}

#sub-container {
    margin-bottom: 10px;
}

#header-form-text {
    font-size: 20px;
}
</style>