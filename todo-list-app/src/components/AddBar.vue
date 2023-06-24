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
    <div class="container">
        <form id="affairform" @submit.prevent='addAffair'>
            <input type="text" name="affair" id="affair" placeholder="Placeholder" v-model="affairData" /> <button v-text=" buttonText" type ='submit'></button>
        </form>
    </div>
</template>