<script>
import '../assets/main.css'

// export default {
//   components: {
//     "v-icon": FaCheckCircle
//   }
// }

</script>

<template>
    <div id="background-div">

        <div class="container">
            <div class="row">
                <div class="col-md-5" id="left-column">
                    <img id="stock-img" src="../assets/images/studying_img.png">
                </div>
                <div class="col-md-7" id="right-column">
                    <h4 class="poppins">The all-in-one platform to ace the IB Diploma.</h4>
                    <p id="access">In <b>IB Preps</b>, you'll gain access to the following:</p>

                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Personalized Help With Explorations
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Mock exam practice
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        IB Prep content review and practice exercises
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Guidance on post-IB opportunities
                    </div>
                    <div class="feature-list poppins">
                        <v-icon name="fa-check-circle" />
                        Contact with tutors well-versed in IB content
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

h4 {
    color: #02385C;
    font-weight: 600;
    text-align: right;
}

#access {
    text-align: right;
}

.feature-list {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
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
</style>