<template>
    <tr v-for="(item, index) in items" :key="item.id || index" class="border-b">
        <td class="px-6 py-4">
            <!-- check box -->
            <v-checkbox v-model="store.completed" :value="item" />
        </td>
        <td class="px-6 py-4">
            {{ item }}
        </td>
        <td class="px-6 py-4">
            <button class="text-red-500 hover:text-red-700" @click="store.removeTodoByIndex(index)">
                x
            </button>
        </td>
    </tr>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todo.js'

const store = useTodoStore()

const props = defineProps({
    items: { type: Array, required: true },

})




</script>
