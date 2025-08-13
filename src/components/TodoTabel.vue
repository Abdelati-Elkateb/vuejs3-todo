<template>
  <table class="table-fixed w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
    <thead>
      <tr v-for="(item, index) in store.items" :key="item.id || index">
        <v-checkbox   label=""></v-checkbox>
        <button @click="store.removeTodoByIndex(index)">
removeTodo
        </button>
        <th>{{ item }}</th>



      </tr>
    </thead>
    <tbody class="text-gray-700">
      <tr class="hover:bg-blue-50 transition">
        <v-checkbox label=""></v-checkbox>
        <td class="px-6 py-4 border-b"></td>
      </tr>
    </tbody>
  </table>

</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const store = useTodoStore() // هذا يرجع object
store.loadTodos() // استدعاء الدالة من داخل store

 

</script>
