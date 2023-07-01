<template>
    <div class="container pe-3">
       <ListHeader class="first" :listTitle="listTitle" :listItemNum="listItemNum"  />
       <ListItems class="second" @passDelete="passDelete" @passSwitch="passSwitch" :listItems="listItems" />
       <!--  <p>this is a test paragraph with value: {{ temp }}</p> -->
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ListItems from './ListItems.vue';
import ListHeader from './ListHeader.vue';

export default {
    name: 'ToDoList',
    props: ['listTitle', 'listItems'],
    components: {
        FontAwesomeIcon,
        ListHeader,
        ListItems
    },
    computed: {
        listItemNum() {
            return this.listItems.length
        }
    },
    methods: {
        temp(){
            console.log('pass')
        },
        passDelete(item){
            this.$emit('delete', item)
        },
        passSwitch(item) {
            this.$emit('switch', item)
        }
    }

}
</script>

<style scoped>

.container {
    border-width: 0px;
    padding: 0;
    min-height: 346px;
   
}




</style>