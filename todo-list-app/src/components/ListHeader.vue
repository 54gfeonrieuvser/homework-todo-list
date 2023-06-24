<template>
    <div class="d-flex justify-content-between align-items-center list-heading pe-4 ps-2">
        <div class="heading-text d-flex">
            <div class=" d-flex justify-content-center align-items-center">
              <!--   <font-awesome-icon icon="fa-solid fa-list" />
                <font-awesome-icon icon="fa-solid fa-list" /> -->
               
                <font-awesome-icon icon="fa-solid fa-list" />
            </div>
            
            <div class="d-flex justify-content-center align-items-center">
                <h2 class="mb-0" v-text="listTitle"></h2>
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
.list-heading {
    border:0px solid red;
}
.heading-text {
    text-align: left;
}

.icon {
    font-size: 18px;
    padding: 3px;
}

.list-heading h2 {

    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
}

</style>