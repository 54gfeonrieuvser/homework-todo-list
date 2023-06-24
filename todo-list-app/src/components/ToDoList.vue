<template>
    <div class="container">
        <ListHeader :listTitle="listTitle" :listItemNum="listItemNum"  />
       <!--  <ListItems @delete="$emit('delete', item, item.affairId)" :listItems="listItems" /> -->
       <ListItems @delete="demo" :listItems="listItems" />
    
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
    methods : {
        demo(a, b) {
            console.log('this is an emit pass')
        }
    }
}
</script>

<style scoped>

.container {
    border: 0px solid blue;
    padding: 0;
    min-height: 346px;
   
}



</style>