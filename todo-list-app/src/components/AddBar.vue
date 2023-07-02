<template>
  <div class="container mt-4 mb-4 px-0">
        <form id="affairform" class='d-flex justify-content-between'  @submit.prevent='addToList(affairData)'>
            <input type="text" name="affair" id="affair" placeholder="Placeholder" v-model.trim="affairData" /> 
            <button  type ='submit'>{{ addButtonText  }}</button>

            <!-- src code  <button v-text='addButtonText' type ='submit'></button> didn't work, why is it? -->
        </form>
    </div>
</template>
<script setup>
    import { useGlobalStore } from '../stores/global'
    import { storeToRefs } from 'pinia';
    const globalStore = useGlobalStore();
    const { addToList } =  globalStore;
    const { addButtonText, affairData } = storeToRefs(globalStore )
</script>

<style scoped>
form {
    gap:8px;
}
.container form input {
    flex-basis: 75%;
    padding:8px;
    border: 1px solid var(--primary);
    border-radius: 4px;
}
.container form input:focus{
    outline: 1px solid rgba(111, 184, 144, 1);
    box-shadow: 0px 0px 1px 1px rgba(46, 100, 70, 0.25);

}
.container form button {
    flex-basis: 25%;
    color:#FFF;
    background: var(--primary);
    border-radius: 8px;
    padding:8px 16px;
}
button{
    border:none
}
.container form button:hover {
    background: var(--secondary);
}
.container form button:active {
    background: var(--grey);
}
</style>