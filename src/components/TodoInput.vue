<template>
    <v-text-field  @keyup.enter="addItem" 
    bg-color="white"
     class="text-field mb-1 border-none"
     v-model="item"
    label="what needs to be done?" variant="solo">
    </v-text-field>


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
}

</script>


<style scoped>
.list-choices {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 100%;
}

.right-links {
    display: flex;
    gap: 20px;
}

:deep(.v-field.v-field--hover) {
  border: 1px solid #42a5f5;

}

:deep(.v-field.v-field--focused) {
 border: 2px solid #42a5f5;
}
</style>

