<script setup>

</script>

<template>
    <div id="benefits">
        <h4 class="poppins">The benefits of using our platform! And many more.</h4>

        <div class="container">
            <!-- top row (save money, learn from high quality, save time) -->
            <div class="row benefits-row poppins">
                <div class="col-md-4">
                    <v-icon class="benefits-icon" name="la-piggy-bank-solid" />
                    <p>Save money</p>
                </div>
                <div class="col-md-4">
                    <v-icon class="benefits-icon" name="md-librarybooks-outlined" />
                    <p>Learn from high-quality content, and practice mock-exams</p>
                </div>
                <div class="col-md-4">
                    <v-icon class="benefits-icon" name="md-timer-outlined" />
                    <p>Save time searching for help</p>
                </div>
            </div>
        </div>

        <div class="container">
            <!-- bottom row (trusted platform, 24/7 access) -->
            <div class="row benefits-row poppins">
                <div class="col-md-4 offset-md-2">
                    <v-icon class="benefits-icon" name="ri-user-follow-line" />
                    <p>Trusted platform created by IB tutors</p>
                </div>
                <div class="col-md-4">
                    <v-icon class="benefits-icon" name="oi-infinity" />
                    <p>24/7 access</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style>
#benefits {
    display: block;
    padding-top: 50px;
    padding-bottom: 50px;
}

h4 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
}

.benefits-icon {
    height: 100px;
    width: 100%;
    margin: auto;
    justify-content: center;
    color: rgb(230, 92, 31);
}

.benefits-row {
    align-items: center;
}

p {
    text-align: center;
    font-weight: 500;
}
</style>
