
<template>
  <v-table v-if="!store.isEmpty" class="todo-table">
    <thead>
      <tr>
        <th class="d-flex">
          <span class="ml-5 mt-4">{{ store.totalIndex }} items left</span>
        </th>
        <th class="cursor-pointer" @click="selectedTab = 'all'">All</th>
        <th class="cursor-pointer" @click="selectedTab = 'active'">Active</th>
        <th class="cursor-pointer" @click="selectedTab = 'completed'">Completed</th>
      </tr>
    </thead>
    <tbody>
      <ShowDate :items="filteredItems" />
    </tbody>
  </v-table>
  <v-btn v-if="!store.isEmpty" @click="store.clearAllTodos" color="#0d6efd" text="red" class="remove-all-btn">
    clear All
  </v-btn>
</template>


<script setup>
import { useTodoStore } from '../store/todo.js'
import { ref, computed } from 'vue'
import ShowDate from '../components/ShowDate.vue'

const store = useTodoStore()
store.loadTodos()

const selectedTab = ref('all')

const filteredItems = computed(() => {
  if (selectedTab.value === 'active') return store.active
  if (selectedTab.value === 'completed') return store.completed
  return store.items
})
</script>


:deep(.todo-table) {
  max-height: 50vh;
  overflow-y: auto;
  display: block;
}


<style scoped>
.remove-all-btn {
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(90deg, #0d6efd 60%, #42a5f5 100%);
  color: #fff !important;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 2px 8px #0d6efd22;
  transition: background 0.2s, box-shadow 0.2s;
  border: none;
}
.remove-all-btn:hover {
  background: linear-gradient(90deg, #42a5f5 40%, #0d6efd 100%);
  box-shadow: 0 4px 16px #0d6efd33;
}

:deep(.todo-table) {
  max-height: 50vh;
  overflow-y: auto;
  display: block;
  background: #f9fbfd;
  border-radius: 14px;
  box-shadow: 0 2px 8px #0d6efd11;
  border: 1px solid #e3eafc;
}
th, td {
  padding: 12px 8px;
  font-size: 1.1rem;
}
th {
  background: #e3eafc;
  color: #0d6efd;
  font-weight: 600;
}
tr {
  transition: background 0.15s;
}
tr:hover {
  background: #f0f6ff;
}
</style>