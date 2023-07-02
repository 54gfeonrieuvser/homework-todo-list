<template>
  <div class="container pe-3">
       <ListHeader :listTitle="props.listTitle" :listItemNum="list.length"  />
       <ListItems  :listItems="listItems" />
       
    </div>
</template>
<script setup>
import ListHeader from './ListHeader.vue'
import ListItems from './ListItems.vue'
import { useGlobalStore } from '../stores/global';
const globalStore = useGlobalStore();
const { list } = globalStore;
const props = defineProps({
    listTitle: {
        type:String,
        default:''
    },
    listItems: {
        type: Array,
    }
})


</script>
<style scoped>
.container {
    min-height: 346px;
}

</style>