<template>
    <div class="flex justify-center items-center h-screen w-full">
        <div class="w-[40%]">
            <div class="text-[#0d6efd] text-3xl font-bold mb-4">
    
            </div>
        <div>


            <HeaderTodo/>
            <InputTodo/>
            <TabelTodo/>

        </div>
           
        </div>
         
    </div>
</template>

<script setup>
import HeaderTodo from '../components/TodoHeader.vue';
import InputTodo from '../components/TodoInput.vue';
import TabelTodo from '../components/TodoTabel.vue';

</script>