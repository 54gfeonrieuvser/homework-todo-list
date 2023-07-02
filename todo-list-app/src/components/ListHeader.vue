<template>
    <div class="px-3 py-3 d-flex justify-content-between align-items-center list-heading">
        <div class="heading-text d-flex">
            <div class="pe-2 d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="fa-solid fa-list" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <h2 class="mb-0 fontStd" v-text="props.listTitle"></h2>
            </div>
        </div>
        <p class="mb-0 ">{{ listItemsNum ? listItemsNum : 0 }} <sub>件</sub>
        </p>
    </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps({
    listTitle:{
        type: String,
        default: ''
    },
    listItemsNum: {
        type: Number,
        default: 0
    }
})
</script>
<style scoped>
.icon {
    font-size: 18px;
    padding: 3px;
}
</style>