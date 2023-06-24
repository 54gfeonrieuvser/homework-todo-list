<script>
export default {
    name: 'AppHeader',
    props: ['appTitle', 'completePercent']
}
</script>


<template>
    <div class="pt-5 pb-5 component-header">
        <header class="d-flex justify-content-between align-items-center">
            <h1 v-text="appTitle" class="text-center custom-h1"></h1>
            <!-- display completion circle -->
            <div id="circle"> {{ Math.round(completePercent *100) }} %</div>
        </header>
    </div>
</template>

<style scoped>
h1.custom-h1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.01em;
  color:rgba(46, 100, 70, 1);
  flex-basis: 90%;
}

.component-header{
    border-bottom:2px solid rgba(214, 147, 100, 1);
    
}
header #circle {
    border-radius:50%;
    background-color: aqua;
    border:0px solid red;
    font-size: 2rem;
    font-weight: 700;
}
</style>
