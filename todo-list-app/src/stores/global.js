import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
 */

export const useGlobalStore = defineStore('global', ()=> {
  // state:{}
  const appTitle = ref('My To Do List');
  const addButtonText = ref('新增事項');
  const list = reactive([]);
  const listIndex = ref(0);
  const affairData = ref(null);
  //getter:{}
  
/*Why I can't use the filter function to compute the list data? from proxy array to proxy object */
  const todoList = computed(()=>{
  /*   const tmplist = list;
    console.log('the tmplist is: ', tmplist)
    console.log('the filter result is: ', tmplist.filter(()=>true) )
    console.log('this is', list.filter(() => {return true}), 'and this is', list)
    return tmplist.filter(()=>true) */
 
    return this.list.filter(()=>{return true})
  })
 
  const completedList = computed(()=>list.filter(e => e.done))

  const completePercent = computed(()=>{return (completedList.value.length / list.length) || 0})


  //actions: {}
 function addToList(affairName) {
    const affair = {
      affairName: affairName,
      affairId: this.listIndex,
      done: false
    }
    this.list.unshift(affair)
    this.listIndex += 1
    affairData.value = null;
  }
  return { appTitle, addButtonText, list, affairData, listIndex, todoList, completedList, completePercent, addToList }
})