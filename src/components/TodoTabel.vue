<template>
  <table v-if="!store.isEmpty" class="w-full border-collapse">
    <thead>
      <tr>
        <th class="d-flex align-center">
          <v-checkbox class="ml-5" v-model="itemCompleted" hide-details density="compact" />
          <span class="mr-5"> {{ store.totalIndex }} items left</span>
        </th>

        <th @click="selectedTab = 'all'" class="">All</th>
        <th @click="selectedTab = 'active'">Active</th>
        <th @click="selectedTab = 'completed'" class="">Completed</th>
      </tr>
    </thead>

    <tbody>
      <ShowDate :items="filteredItems" />
    </tbody>
  </table>

  <v-btn v-if="store.itemTodo" @click="store.clearAllTodos" color="#0d6efd" text="red" class="remove-all-btn">
    clear Completed
  </v-btn>
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'
import { ref, onMounted, computed } from 'vue'
import ShowDate from '../components/ShowDate.vue'

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
}
</style>