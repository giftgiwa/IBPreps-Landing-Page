<template>
<div id="need-help">
    <!-- background blur behind pop-up -->
    <div id="background-blur">
        hello world
    </div>

</div>
</template>

<style scoped>
    #background-blur {
        width: 100vw;
        height: 100vh;
        /* color: rgb(0, 0, 0, 0); */
        color: red;
        backdrop-filter: blur(10px);
        z-index: 5;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>