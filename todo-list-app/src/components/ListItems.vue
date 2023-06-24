<template>
        <ul class="datalist">
              <li v-for="item in listItems">
            <input class='me-4' @click.prevent="$emit('switch', item)" type="checkbox" :name="item.affairName"
                :id="item.affairName" />
            <label :for="item.affairName">{{ item.affairName }}</label>
            <button @click="$emit('delete', item, item.affairId)" class="ms-3">delete</button>
        </li>
        </ul>
</template>

<script>
export default {
    name: 'ListItems',
    props: ['listItems'],
    components: {
    }
}
</script>

<style>
li {
    list-style-type: none;
}

</style>