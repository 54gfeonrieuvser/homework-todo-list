<template>
  <div id="main-app " class="container d-flex justify-content-center">
    <div class="wrapper container">
      <AppHeader :appTitle="appTitle" :completePercent="completePercent" />
      <AddBar @addTo='addToList' />
      <div class="d-flex">

        <ToDoList class="custom-todo-list" :style="customListStyle" listTitle="待辦事項" :listItems="todoList" @switch="switchItem" @delete="deleteItem" />
        <ToDoList class="custom-complete-list" listTitle="完成事項" :listItems="completedList" @switch="switchItem" @delete="deleteItem" />
      </div>
    </div>
  </div>
  <!-- for debug  -->
  <div class="debug">
    <div v-bind:style="{ color: 'orange' }"><p>what is the whole list: </p> {{ list }}</div><br/>
    <div :style="{ color: 'green' }"><p>what is the undone list: </p>{{ todoList }}</div><br/>
    <div :style="{ color: 'blue' }"><p>what is the complete list: </p> {{ completedList }}
    </div>
  </div>
</template>
<script >
import AppHeader from './components/AppHeader.vue'
import AddBar from './components/AddBar.vue'
import ToDoList from './components/ToDoList.vue'
import _ from "lodash"

export default {
  data() {
    return {
      appTitle: "My To Do List",
      list: [],
      listIndex: 0,
    }
  },
  components: {
    AppHeader,
    AddBar,
    ToDoList,
  },
  methods: {
    addToList(affairName) {
      const affair = {
        affairName: affairName,
        affairId: this.listIndex,
        done: false
      }
      this.list.unshift(affair)
      this.listIndex += 1
    },
    switchItem(item) {
      item.done = !(item.done)
    },
    deleteItem(item, index) {

      const targetindex = _.findIndex(this.list, {
        affairId: index
      })
      /*  for debug  
       console.log(`the item index is: ${item.affairId}`)
       console.log(`the del item index is: ${index}`)
       console.log(`the actual index is: ${targetindex}`) */
      this.list.splice(targetindex, 1)
    }
  },
  computed: {
    todoList() {
      return this.list.filter(e => !e.done)
    },
    completedList() {
      return this.list.filter(e => e.done)
    },
    completePercent() {
      let result = this.completedList.length / this.list.length
      return result || 0
    },
    customListStyle() {
      return {'border-right':'1px solid rgba(214, 147, 100, 1)',
      'border-style':'dotted'}
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');

#main-app {
  border: 0px solid red;
  border-radius: 16px;
  padding: 0 24px;
  font-family: 'Noto Sans TC', sans-serif;
}

.wrapper.container {
  border: 0px solid blue;
  
}
.debug{
  text-align: left;
}
.debug p{
  font-size: 2rem;
  font-weight: 700;
}

::v-deep .custom-todo-list .list-heading  {
  color:rgba(111, 184, 144, 1);
}
::v-deep .custom-todo-list .list-heading  p{
  color:rgba(46, 100, 70, 1);
}
::v-deep .custom-todo-list .list-heading p sub {
  color:rgba(111, 184, 144, 1);
}
::v-deep  .custom-complete-list .list-heading  {
  color:rgba(154, 154, 154, 1);
}
::v-deep  .custom-complete-list .list-heading  p{
  color:rgba(73, 73, 73, 1);
}
::v-deep  .custom-complete-list .list-heading  sub{
  color:rgba(154, 154, 154, 1);
}

.custom-todo-list li {
  /* Add custom styles to <li> elements within the ToDoList component */
  margin-bottom: 8px;
  font-weight: bold;
}

</style>
