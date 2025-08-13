<template>
    <div>
        <v-text-field v-model="item" border="error xl" label="enter ur name" variant="outlined"></v-text-field>
        <v-btn @click="addItem" color="primary">Add</v-btn>
    </div>
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