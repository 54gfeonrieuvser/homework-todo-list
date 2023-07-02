<script setup>
import AddBar from './components/AddBar.vue'
import AppHeader from './components/AppHeader.vue'
import ToDoList from './components/ToDoList.vue'

import { useGlobalStore } from './stores/global'

const globalStore = useGlobalStore();
const { list, completedList, todoList } = globalStore;
</script>

<template>
  <div id="main-app" class="container d-flex justify-content-center">

    <div class="wrapper container">
      <AppHeader />
      <main>
        <AddBar />
        <div class="d-flex">

          <ToDoList :listTitle="'待辦事項'" :listItems="todoList" class="custom-todo-list" />
          <ToDoList :listTitle="'完成事項'" :listItems="completedList" class="custom-complete-list" />
        </div>
      </main>
    </div>
  </div>
  <!-- for debug  -->
  <h2>Here is the debug msg from Store:</h2>
  originalList => {{ list.length }} : toDoList => {{ todoList.length }} : completionList => {{ completedList.length }}<br>
  <div class="debug">
    <div v-bind:style="{ color: 'orange' }">
      <p>what is the whole list: </p> {{ list }}
    </div><br />
    <div :style="{ color: 'green' }">
      <p>what is the undone list: </p>{{ todoList }}
    </div><br />
    <div :style="{ color: 'blue' }">
      <p>what is the complete list: </p> {{ completedList }}
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');

#main-app {
  border-radius: 16px;
  padding: 0 24px;
  font-family: 'Noto Sans TC', sans-serif
}

.debug {
  text-align: left;
}

.debug p {
  font-size: 2rem;
  font-weight: 700;
}

/* messy customize */
.custom-todo-list :deep(.list-heading) {
  color: var(--primary)
}

.custom-todo-list :deep(.list-heading p) {
  color: var(--secondary)
}

.custom-todo-list :deep(.list-heading p sub) {
  color: var(--primary)
}

.custom-todo-list :deep(.list ul li .list-content) {
  color: var(--grey-dark)
}


.custom-complete-list :deep(.list-heading) {
  color: var(--grey)
}

.custom-complete-list :deep(.list-heading p) {
  color: var(--grey-dark)
}

.custom-complete-list :deep(.list-heading sub) {
  color: var(--grey)
}

.custom-complete-list :deep(.list ul li .list-content) {
  color: var(--grey);
  text-decoration: line-through;
}
</style>
