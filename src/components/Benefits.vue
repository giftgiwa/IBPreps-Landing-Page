<script setup>

</script>

<template>
    <div id="benefits">
        <h4 class="poppins">The benefits of using our platform! And many more.</h4>

        <div class="container">
            <!-- top row (save money, learn from high quality, save time) -->
            <div class="row benefits-row poppins">
                <div class="col-md-3 benefits-entry align-top">
                    <v-icon class="benefits-icon" name="la-piggy-bank-solid" />
                    <p>Save money</p>
                </div>
                <div class="col-md-3 benefits-entry align-top">
                    <v-icon class="benefits-icon" name="ri-user-follow-line" />
                    <p>Learn from high-quality content, and practice mock-exams</p>
                </div>
                <div class="col-md-3 benefits-entry">
                    <v-icon class="benefits-icon" name="gi-atom" />
                    <p>Access all necessary resources in one place</p>
                </div>
                <div class="col-md-3 benefits-entry">
                    <v-icon class="benefits-icon" name="oi-infinity" />
                    <p>Study at your convenience with 24/7 platform access</p>
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

/* .benefits-entry {
    top: 0;
    position: relative;
} */

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
