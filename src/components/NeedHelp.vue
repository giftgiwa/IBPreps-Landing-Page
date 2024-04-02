<template>
<div id="need-help">
    <!-- background blur behind pop-up -->
    <div class="poppins" id="popup">

        <div id="exit-button">
            <!-- MdClose -->
            <v-icon name="md-close" />
        </div>
        <h2>Contact Us</h2>

        <p class="label">Your name</p>
        <input class="help-field">

        <p class="label">Your email</p>
        <input class="help-field">

        <p class="label">Your Reason for Contact</p>
        <input class="help-field">

        <p class="label">Description</p>
        <input class="help-field" id="description-box">

        <button id="submit-buttom">Submit Request</button>

        <p>or you can call us at (+1)555-555-555</p>

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

    #popup {
        border-radius: 20px;
        background-color: white;
        color: black;
        width: 400px;
        /* height: 500px; */
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
    }

    input:hover {
        background-color: rgba(236, 236, 236, 0.704);
    }

    #description-box {
        height: 150px;
    }  

    button {
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

    button:hover {
        background-color: #5197f9;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 0;
    }
</style>