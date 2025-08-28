<template>
<v-table v-if="!store.isEmpty" class="todo-table">
  <thead>
    <tr>
      <th class="d-flex">
        <v-checkbox hide-details density="compact" />
        <span class="ml-5 mt-4">{{ store.totalIndex }} items left</span>
      </th>
      <th class="cursor-pointer" @click="selectedTab = 'all'">All</th>
      <th class="cursor-pointer" @click="selectedTab = 'active'">Active</th>
      <th class="cursor-pointer" @click="selectedTab = 'completed'">Completed</th>
    </tr>
  </thead>

  <tbody>
    <ShowTable :items="filteredItems" />
  </tbody>
</v-table>
 
  <v-btn v-if="!store.isEmpty"  @click="store.clearAllTodos" color="#0d6efd" text="red" class="remove-all-btn">
    clear Completed
  </v-btn>
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'
import { ref, onMounted, computed } from 'vue'
import ShowTable from '../components/ShowDate.vue'

const store = useTodoStore()
store.loadTodos()

const selectedTab = ref("all")


const filteredItems = computed(() => {
  if (selectedTab.value === 'active') return store.active
  if (selectedTab.value === 'completed') return store.completed
  return store.items
})

</script>


<style scoped>
.remove-all-btn {
  width: 100%;
  margin-top: 20px;
}

:deep(.todo-table) {
  max-height: 50vh;   /* أقصى ارتفاع: نصف الشاشة */
  overflow-y: auto;   /* يعمل scroll داخلي لو العناصر زادت */
  display: block;     /* ضروري عشان overflow يشتغل */
}
</style>