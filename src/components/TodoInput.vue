<template>
    <v-text-field @keyup.enter="addItem" class="text-field" v-model="item" border="error xl"
        label="what needs to be done?" variant="outlined"></v-text-field>
</template>

<script setup>

import { ref } from 'vue'
import { useTodoStore } from '../store/todo.js'
// import HeaderTodo from '../components/HeaderTodo.vue';

const store = useTodoStore()



// const todo = useTodo()
const item = ref('')

const addItem = () => {
    store.addItem(item.value)
    item.value = '' // Clear the input after adding
    console.log("Item added:", item.value)
    console.log("Current store items:", store.items)
}

</script>


<style scoped>
.list-choices {
    display: flex;
    justify-content: space-between;
    /* يسار ويمين */
    align-items: center;
    margin-top: 10px;
    width: 100%;
}

.right-links {
    display: flex;
    gap: 20px;
}
</style>