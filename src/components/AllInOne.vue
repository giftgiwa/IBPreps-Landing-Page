<script>
import '../assets/main.css'

</script>

<template>
    <div id="background-div">

        <div class="container">
            <div class="row">
                <div class="col-md-5" id="left-column">
                    <img id="stock-img" src="../assets/images/studying_img.jpg">
                </div>
                <div class="col-md-7" id="right-column">
                    <h4 class="poppins">The all-in-one platform to ace the IB Diploma.</h4>
                    <p class="poppins" id="access">In <b>IB Preps</b>, you'll gain access to the following:</p>

                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Mock exams
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        IB content and exercises
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Support of tutors well-versed in IB
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        AI idea generator for Internal Assessment
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        <p class="feature-list-text">Guidance on post-IB opportunities</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#background-div {
    width: 100vw;
    background-color: #E8F7FF;
    display: block;
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
}

p {
    font-size: 24px;
}

h4 {
    color: #02385C;
    font-weight: 600;
    text-align: left;
    font-size: 36px;
}

#access {
    text-align: left;
}

.feature-list {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    /* margin-left: 20px; */
}

.check-icon {
    color: black;
    width: 10px;
    height: 10px;
}

#stock-img {
    width: 100%;
    margin-bottom: 20px;
}

#right-column {
    padding-left: 50px;
}

.feature-list-text {
    display: inline-block;
    font-weight: 400;
    line-height: 16px;
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: 15px;
}

@media screen and (max-width: 600px) {

    h4 {
        text-align: center;
    }

    #right-column {
        padding-left: 10px;
        padding-right: 10px;
    }

    #access {
        text-align: center;
    }

    .feature-list {
        transform: translate(0, -50%);
        margin-left: 0;
        text-align: center;
    } 
}
</style>