<template>
    <div class="list ">
        <ul class="list-group">
            <li class="list-group-item d-inline-flex justify-content-between list-item " v-for="item in listItems" :key="item.affairId">
                <div class="list-area d-inline-flex justify-content-between">
                    <input class='list-check' @click="$emit('passSwitch', item)" type="checkbox"
                        :name="item.affairName" :id="item.affairName" />
                    <input class="list-content ps-2" v-model="item.affairName" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <font-awesome-icon @click="$emit('passDelete', item)" icon="fa-solid fa-trash-can" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'ListItems',
    props: ['listItems'],
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
.fa-trash-can {
    color: rgba(186, 68, 68, 1);
}

.fa-trash-can:hover {
    cursor: pointer;
}

.list-item:focus-within {
    outline: 1px solid rgba(111, 184, 144, 1);
    border-radius: 4px;
    box-shadow: 0px 0px 1px 1px rgba(46, 100, 70, 0.25);
    z-index: 20;
}

li {
    border: none;
}

.list-area {
    width: 100%;
}

.list-content {
    border: none;
    width: 100%;
}

.list-content:focus {
    outline: none;
}
</style>