<template>
    <div class="list ">
        <ul class="list-group">
            <li class="list-group-item d-inline-flex justify-content-between list-item " v-for="item in listItems"
                :key="item.affairId">
                <div class="list-area d-inline-flex justify-content-between">
                    <input class='list-check' type="checkbox" :name="item.affairName"
                        :id="item.affairName" />
                    <input class="list-content ps-2" v-model="item.affairName" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <font-awesome-icon @click="$emit('passDelete', item)" icon="fa-solid fa-trash-can" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<style scoped>
    .list {
        border: red solid 0px;
    }
</style>