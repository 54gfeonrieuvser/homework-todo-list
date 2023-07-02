<template>
     <header class="component-header d-flex justify-content-between align-items-center pt-3 pb-4">
        <h1 v-text="appTitle" class="text-center fontStd secondary-color custom-h1 mb-0"></h1>
        <!-- display completion circle just for now -->
        <div id="circle"> {{ Math.round(completePercent*100) }} %</div>
    </header>
</template>
<script setup>
    import { useGlobalStore } from '../stores/global'
    import { storeToRefs } from 'pinia'
    const globalstore = useGlobalStore();
   /*  const { list } = globalstore; */
    const { appTitle, completePercent } = storeToRefs(globalstore)
</script>


<style scoped>
/* what is the better way to set layout of heading and completion UI?? is it need to push the UI out of flow? */
.custom-h1 {
    flex-basis: 90%;
}

.component-header {
    border-bottom: 1px solid rgba(214, 147, 100, 1);
}

header #circle {
    border-radius: 50%;
    background-color: var(--primary);
    font-size: 2rem;
    font-weight: 700;
}
</style>
