<template>
    <div class="px-3 py-3 d-flex justify-content-between align-items-center list-heading ">
        <div class="heading-text d-flex">
            <div class="pe-2 d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="fa-solid fa-list" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <h2 class="mb-0 fontStd" v-text="listTitle"></h2>
            </div>
        </div>
        <p class="mb-0 ">{{ listItemNum ? listItemNum : 0 }} <sub>件</sub>
        </p>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'ListHeader',
    props: ['listTitle', 'listItemNum'],
    components: {
        FontAwesomeIcon
    }
}

</script>
<style scoped>

.icon {
    font-size: 18px;
    padding: 3px;
}

</style>