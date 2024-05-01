<script>
import $ from 'jquery'

export default {
  methods: {
    hideComponent() {
      this.$emit('hide');
    },
    async handleRequest(event) {
        console.log("request submitted")
        let formItems = document.querySelectorAll(".contact-form")
        
        for (let i = 0; i < formItems.length; i++) {
            if (formItems[i].value == "") { // form incomplete
                formItems[i].focus()
                for (let j = 0; j < formItems.length; j++) {
                    formItems[j].style.borderColor = "#ffd2cf"
                }
                return
            }
        }

        // form complete - send to database
        /** data format
         * {
                name: string;
                email: string;
                reason: string;
                description: string;
            } ⁠
         */
        
        let name = document.getElementById("name").value
        let emailAddress = document.getElementById("email").value
        let reasonForContact = document.getElementById("reason").value
        let description = document.getElementById("description-box").value


        const response = await fetch(
            "https://ib-prep-project.vercel.app/api/support",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailAddress,
                    name: name,
                    reason: reasonForContact,
                    description: description
                })
            }
        )

        const data = await response.json()
        console.log(data)
        console.log(response.ok)

        if (response.ok) {
            console.log("submission successful")
            document.getElementById("help-submit-button").textContent = "Submitted!"

            for (let j = 0; j < formItems.length; j++) {
                formItems[j].style.value = ""
                formItems[j].style.borderColor = "#cfffd1"
            }

        } else {
            for (let j = 0; j < formItems.length; j++) {
                formItems[j].style.borderColor = "#ffd2cf"
            }
            console.log(error)
        }
    }
  },
};

</script>

<template>
<div id="need-help">
    <!-- background blur behind pop-up -->
    <div class="poppins" id="popup">

        <button id="exit-button" @click="hideComponent">
            <v-icon name="md-close" />
        </button>
        <h2>Contact Us</h2>

        <p class="label">Your name</p>
        <input class="contact-form help-field" id="name">

        <p class="label">Your email</p>
        <input class="contact-form help-field" id="email">

        <p class="label">Your Reason for Contact</p>
        <input class="contact-form help-field" id="reason">

        <p class="label">Description</p>
        <input class="contact-form help-field" id="description-box">

        <!-- <button id="help-submit-button">Submit Request</button> -->
        <button id="help-submit-button" @click="handleRequest">Submit Request</button>

    </div>

</div>
</template>

<style scoped>

    h2 {
        font-size: 24px;
    }
    #need-help {
        width: 100vw;
        height: 100vh;
        z-index: 5;
        position:fixed;
        backdrop-filter: blur(10px);
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 700px) {
        #popup {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    #popup {
        border-radius: 20px;
        background-color: white;
        color: black;
        width: 400px;
        position: fixed;
        top: 70px;
        right: 150px;
        padding: 30px;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 8px 8px 48px 8px rgba(0, 0, 0, 0.08);   
    }

    .label {
        font-size: 12px;
        text-align:left;
        margin-bottom: 0;
        margin-top: 15px;
    }

    input {
        height: 40px;
        width: 100%;
        border-radius: 8px;
        border-width: 1.5px;
        border-style: solid;
        border-color: #D0D5DD;
        padding: 10px;
        font-size: 14px;
        transition: 0.25s;
        outline: none;
    }

    input:hover {
        background-color: rgba(236, 236, 236, 0.704);
    }

    #description-box {
        height: 150px;
    }  

    #help-submit-button {
        background-color: #1570EF;
        border: 0;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        padding: 10px;
        margin-top: 20px;
        width: 100%;
        transition: 0.25s;
    }

    #help-submit-button:hover {
        background-color: #5197f9;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 0;
    }

    #exit-button {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 30px;
        right: 30px;
        color: rgb(178, 178, 178);
        background-color: rgb(0, 0, 0, 0);
        border: 0;
        border-radius: 10px;
        transition: 0.25s;
    }

    #exit-button:hover {
        background-color: rgba(205, 205, 205, 0.365);
    }

</style>