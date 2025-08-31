<template>
    <tr  v-for="(item, index) in items" :key="item?.id ?? index" class="border-b">
        <td class="d-flex align-center">
            <!-- check box -->
            <v-checkbox class="mt-5" :model-value="store.completed.includes(item)" @change="store.toggleState(item)" />
          {{ item?.todo}}
        </td>
        <td class="text-right" colspan="4">
            <button class="btn-remove text-[#404040]  hover:text-red-700" @click="store.removeTodoByIndex(index)">
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

<style>
.btn-remove {
    font-size: 20px;
}
</style>
