<script >
import AppHeader from './components/AppHeader.vue'
import AddBar from './components/AddBar.vue'
import ToDoList from './components/ToDoList.vue'
import _ from "lodash"

export default {
  data() {
    return {
      appTitle:"My To Do List",
      list: [],
      listIndex: 0
    }
  },
  components: {
    AppHeader,
    AddBar,
    ToDoList
  },
  methods: {
    addToList(affairName) {
      const affair = {
        affairName: affairName,
        affairId: this.listIndex,
        done: false
      }
      this.list.unshift(affair)
      this.listIndex +=1
    },
    switchItem(item){
      item.done = !(item.done)
    },
    deleteItem(item, index){
     
      const targetindex = _.findIndex(this.list, {
        affairId: index
      })
     /*  for debug  
      console.log(`the item index is: ${item.affairId}`)
      console.log(`the del item index is: ${index}`)
      console.log(`the actual index is: ${targetindex}`) */
      this.list.splice( targetindex, 1)  
    }
  },
  computed: {
    todoList() {
      return this.list.filter(e=>!e.done)
    },
    completedList() {
      return this.list.filter(e=>e.done)
    }
  }
}
</script>

<template>
  <div>
   <AppHeader :appTitle="appTitle" />
   <AddBar @addTo = 'addToList' />
   <div class="d-flex">
    
    <ToDoList listTitle="待辦事項" :listItems="todoList" @switch="switchItem" @delete="deleteItem"/>
    
    <ToDoList listTitle="完成事項" :listItems="completedList"  @switch="switchItem" @delete="deleteItem"/>
   </div>
  </div>
  <!-- for debug  -->
  <div>what is the whole {{ list }}</div>
  <div>what is left {{ todoList }}</div>
  <div>what is right {{ completedList }} 
  </div> 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
  body{
/*     border: 3px solid red;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; */
  }
</style>
