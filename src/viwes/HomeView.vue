<template>
    <div class="d-flex justify-center h-screen  w-screen align-center">
        <div class="w-50 rounded-lg" style="background-color: rgb(241 230 230 / 24%);; padding: 40px;">
            <HeaderTodo />
            <InputTodo />
            <TabelTodo />
        </div>
    </div>
</template>

<script setup>
import HeaderTodo from '../components/TodoHeader.vue';
import InputTodo from '../components/TodoInput.vue';
import TabelTodo from '../components/TodoTabel.vue';

</script>


<script>

</script>