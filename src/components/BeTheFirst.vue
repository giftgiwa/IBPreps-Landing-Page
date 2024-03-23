<script setup>
</script>

<template>
    <div id="be-the-first">
        <p id="header-form-text">Be the first to try IB Preps!</p>

        <div class="container" id="interest-form">
            <div class="row">
                <div class="col-md-7" id="sub-container">
                    <input class="col-md-7 poppins" placeholder="Email adress">
                </div>
                <div class="col-md-5" id="sub-container">
                    <button>Submit</button>
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