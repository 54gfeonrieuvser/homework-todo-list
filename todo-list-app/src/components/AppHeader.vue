<script>
export default {
    name: 'AppHeader',
    props: ['appTitle']
}
</script>


<template>
    <div>
        <header >
            <h1 v-text="appTitle" class="text-center"></h1>
        <!-- display completion --><div ></div>
         </header>
        <hr />
    </div>
</template>