<script setup>
import '../assets/main.css'
import $ from 'jquery'

let emails = ""

$(document).ready(function() {
    console.log("document ready")

    $("#email-address-1").keypress(function(event) {
        if (event.which === 13) {
            $("#submit-button-1").click()
        }
    })

    $('#submit-button-1').click(function() {
        console.log("button clicked")

        let emailAddress = document.getElementById("email-address-1").value

        // fetch("https://ib-prep-project.vercel.app/api/whitelist", {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //     email: "test1@gmail.com",
        //     }),
        // })

        // attempted POST request
        $.ajax({
            type: "POST",
            url: "https://ib-prep-project.vercel.app/api/whitelist",                
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify({
                email: emailAddress,
            }),
            success: function(result){
                console.log(result)

                // clear input field on submit
                document.getElementById("email-address-1").value = ""
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
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
                    Concretely, IB Preps features course content and mock-exams, guidance for essays, group and individual live classes with certified IB teachers, and psychological and vocational support
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
                <!-- <div id="video-placeholder"></div> -->
                <!-- insert video here -->
                <video width="400" height="300" controls>
                    <source id="video" src="../assets/videos/video.mov" type="video/quicktime">
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
    padding-bottom: 20px;
    margin-bottom: 30px;
}

h2 {
    font-weight: 600;
    color: #02385C;
}

p {
    font-size: 14px;
    text-align: left;
    font-weight: 400;
}

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
}

#sub-container {
    margin-bottom: 10px;
}
</style>
