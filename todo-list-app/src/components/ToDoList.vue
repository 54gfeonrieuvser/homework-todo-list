<script>
export default {
    name: 'ToDoList',
    props: ['listTitle', 'listItems'],

}
</script>


<template>
    <div class="container">

        <div class="d-flex justify-content-between">

            <!-- Icon component -->
            <h2 v-text="listTitle"></h2>
            <p>{{ listItems ? listItems.length : 0 }} 件</p>
        </div>
        <!-- list -->
        <ul>
            <li v-for="item in listItems">
                <input class='me-4' @click.prevent="$emit('switch', item)" type="checkbox" :name="item.affairName"
                    :id="item.affairName" />
                <label :for="item.affairName">{{ item.affairName }}</label>
                <button @click="$emit('delete', item, item.affairId)" class="ms-3">delete</button>
            </li>
        </ul>

    </div>
</template>

<style>
li {
    list-style-type: none;
}
</style>