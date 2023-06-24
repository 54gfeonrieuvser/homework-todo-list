<script>
export default {
    name: 'AddBar',
    data() {
        return {
            affairData: null,
            buttonText:'新增事項'
        }
    },
    methods: {
        addAffair() {
            if(this.affairData){
                this.$emit('addTo', this.affairData)
                this.affairData = null
            }
        }
    }
}
</script>


<template>
    <div class="container mt-4 mb-4">
        <form id="affairform" class='d-flex justify-content-between' @submit.prevent='addAffair'>
            <input type="text" name="affair" id="affair" placeholder="Placeholder" v-model="affairData" /> <button v-text=" buttonText" type ='submit'></button>
        </form>
    </div>
</template>

<style scoped>
.container{
    border:0px solid red;
    padding:0;
}
form {
    border:0px solid yellow;
}
.container form input {
    flex-basis: 75%;
    padding:8px;
    border: 1px solid rgba(111, 184, 144, 1);
    border-radius: 4px;
}
.container form button {
    flex-basis: 20%;
    color:#FFF;
    background: rgba(111, 184, 144, 1);
    border-radius: 8px;
    padding:8px 16px;
}
</style>